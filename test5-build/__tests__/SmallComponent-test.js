// __tests__/SmallComponent-test.js
var PageObject = require("react-page-objects");

var toTestPath = '../src/SmallComponent.jsx';
jest.dontMock(toTestPath);

describe('SmallComponent', function() {
  afterEach(function(done) {
      var React = require('react/addons');
      React.unmountComponentAtNode(document.body) // Assuming mounted to document.body
      document.body.innerHTML = ""                // Just to be sure :-P
      setTimeout(done)
  })

  it('changes the text after click', function() {
    var React = require('react/addons');
    var SmallComponent = require(toTestPath);
    var TestUtils = React.addons.TestUtils;


    var SmallCompoPageObject = PageObject.extend({
      elements: {
        items: []
      },
      /*get label(){
        return TestUtils.findRenderedDOMComponentWithTag( 
          this.element , 'label');
      },*/
      getComponent: function (props) {
        return  <SmallComponent labelOn="On" labelOff="Off" {...props}  /> ;
      }
    });
    
    var smallCompo = new SmallCompoPageObject( );
    // Verify that it's Off by default
    expect( smallCompo.label ).toEqual('Off');
    
    // Simulate a click and verify that it is now On
    //smallCompo.labelToggler.click();
    //smallCompo.labelToggler.checked(true);
    //TestUtils.Simulate.change(smallCompo.bar,{"target": {"checked": true}});
    smallCompo.foo.click();
    
    //TestUtils.Simulate.change(checkbox.getDOMNode(), {"target": {"checked": true}});
    
    /*//expect(label.getDOMNode().textContent).toEqual('On');*/
    expect( smallCompo.label ).toEqual('On');
   
    //verify text input
    expect(smallCompo.searchInput.value).toEqual("avb");
    smallCompo.searchInput.value = "bar@baz.com";
    expect(smallCompo.state.searchText).toEqual("bar@baz.com");

  });
});
