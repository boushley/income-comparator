'use strict';

import {createClass} from 'react';
import {Headers, Display} from './income-display'

export default createClass({
  render: function() {
    let displays = [<Headers/>];
    this.props.incomes.forEach(function(i) {
      displays.push(<Display income={i} />);
    });
    return <ul className="horizontal-list row">
      {displays}
    </ul>;
  }
});

