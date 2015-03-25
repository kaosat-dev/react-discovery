var React = require('react/addons');

var SmallComponent = React.createClass({

  getInitialState: function() {
    return { 
      isChecked: false, 
      searchText:"avb" 
    };
  },
  onChange: function() {
    this.setState({
      isChecked: this.refs.labelToggler.getDOMNode().checked,//!this.state.isChecked,
      searchText:this.refs.searchInput.getDOMNode().value
      });
    console.log("foo",this.refs.labelToggler.getDOMNode().checked);
  },
  onFoo: function(){
    console.log("gna");
    this.setState({
      isChecked: true,
      searchText:this.refs.searchInput.getDOMNode().value
      });
  },
  render: function() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
          className="labelOn"
          ref="labelToggler"
        />
        <input 
          type="text"
          value={this.state.searchText}
          onChange={this.onChange}
          className="searchInput"
          ref="searchInput"
        />
        <button ref="foo" onClick={this.onFoo} />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
});
module.exports = SmallComponent;
