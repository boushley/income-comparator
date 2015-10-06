'use strict';

import {Component} from 'react';
import {Headers, Display} from './income-display'

export default class IncomeList extends Component {
  render() {
    let displays = [<Headers/>];
    this.props.incomes.forEach(function(i) {
      displays.push(<Display income={i} />);
    });
    return <ul className="horizontal-list row">
      {displays}
    </ul>;
  }
}

