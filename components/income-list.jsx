'use strict';

import {Component} from 'react';
import {Headers, Display} from './income-display'

export default class IncomeList extends Component {
  render() {
    let displays = [<Headers key="row-headers"/>];
    this.props.incomes.forEach(function(i, idx) {
      displays.push(<Display income={i} key={idx} />);
    });
    return <ul className="horizontal-list row">
      {displays}
    </ul>;
  }
}

