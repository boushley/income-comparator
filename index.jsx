'use strict';

var React = require('react');
var HelloMessage = require('./components/hello');

React.render(<HelloMessage name="John" />, document.getElementById('content'));
