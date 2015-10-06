'use strict';

import {Component} from 'react';
import { connect } from 'react-redux';
import IncomeList from './income-list'

class Comparison extends Component {
  render() {
    return <div>
        <IncomeList incomes={this.props.incomes} />
      </div>;
  }
}

function select(state) {
  return {
    incomes: state.incomes
  };
}

export default connect(select)(Comparison);
