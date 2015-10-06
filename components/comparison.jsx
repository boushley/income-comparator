'use strict';

import {Component} from 'react';
import IncomeList from './income-list'

export default class Comparison extends Component {
  render() {
    return <div>
        <IncomeList incomes={this.props.incomes} />
    </div>;
  }
}
