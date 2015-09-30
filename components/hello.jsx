'use strict';

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello There {this.props.name}</div>;
  }
});

module.exports = HelloMessage;
