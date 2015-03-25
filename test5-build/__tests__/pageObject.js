var React = require("react");
var _ = require("underscore");
var extend = require("./extend");
var elementFactory = require("./elementFactory");

function PageObject(props) {
  if (_.has(props, "_reactInternalInstance")) {
    this.element = props;
  } else if (_.has(props, "_rootNodeID")) {
    this.element = props._instance;
  } else {
    this.element = getElement(this);
  }

  this.dispose = dispose;

  wrapComponentDidUpdate(this.element, this);

  updateRefs(this);

  Object.defineProperty(this, "state", {
    get: function () {
      return this.element.state;
    }
  });
  
  Object.defineProperty(this, "label", {
        get: function () {
          return require("react/addons").addons.TestUtils.findRenderedDOMComponentWithTag( 
          this.element , 'label').getDOMNode().textContent;
        }
      });
      
    Object.defineProperty(this, "bar", {
        get: function () {
          return require("react/addons").addons.TestUtils.findRenderedDOMComponentWithClass( 
          this.element , 'labelOn').getDOMNode();
        }
      });
  
  function getElement(po) {
    var utils = require("react/addons").addons.TestUtils;
    var component = po.getComponent(props);

    if (!component) {
      throw new Error("component required");
    }

    return utils.renderIntoDocument(component);
  }

  function updateRefs(po) {
    _.each(po.element.refs, function (ref, name) {
      this[name] = elementFactory(ref, name, po.elements);
    }, po);
  }

  function wrapComponentDidUpdate(component, po) {
    var oldComponentDidUpdate = component.componentDidUpdate;
    component.componentDidUpdate = function () {
      updateRefs(po);
      oldComponentDidUpdate && oldComponentDidUpdate.apply(this, arguments);
    };
  }

  function dispose() {
    React.unmountComponentAtNode(this.element.getDOMNode().parentNode);
  }
}

PageObject.prototype = {
  getComponent: function (props) {
    //console.warn("Implement PageObject#getComponent");
    
    return React.createElement(props);
  }
};

PageObject.extend = extend;

module.exports = PageObject;
