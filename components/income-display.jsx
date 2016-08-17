'use strict';

import {Component} from 'react';
import {connect} from 'react-redux';
import {fromData} from '../lib/income-types';
import {federal} from '../lib/taxes';
import {FormattedNumber} from 'react-intl';


class DisplayComponent extends Component {
  render() {
    let income = fromData(this.props.income);
    let gross = income.getMonthlyGross();
    let netSoFar = gross;
    let expenseElements = this.props.expenses.map(calculateExpense);

    function calculateExpense(e) {
        let effectPercent = e.effects[income.getEmploymentType()].percent;
        let effectAmount = e.effects[income.getEmploymentType()].fixed || 0;
        let deductionAmount = effectAmount;
        if (effectPercent) {
          deductionAmount += gross * effectPercent;
        }

        netSoFar -= deductionAmount;
        return [
          <dt>{e.name}</dt>,
          <dd> <FormattedNumber value={deductionAmount} style="currency" currency="USD" /> </dd>
        ];
    }

    return <li className="col-md-2">
      <h4>{income.getDisplay()}</h4>
      <dl>
        <dt>Employment Type</dt>
        <dd>
          {income.getEmploymentType()}
        </dd>
        <dt>Monthly Gross</dt>
        <dd>
          <FormattedNumber value={gross} style="currency" currency="USD" />
        </dd>
        {expenseElements}
        <dt>Monthly Net</dt>
        <dd>
          <FormattedNumber value={netSoFar} style="currency" currency="USD" />
        </dd>
      </dl>
    </li>;
  }
}
export const Display = connect(getExpenses)(DisplayComponent);

class HeaderComponent extends Component {
  render() {
    let expenses = this.props.expenses;
    return <li className="headers col-md-2">
      <h4>Headers</h4>
      <dl>
        <dt>Employment Type</dt>
        <dt>Monthly Gross</dt>
        {expenses.map(e => {
          return <dt key={e.name}>{e.name}</dt>
        })}
        <dt>Monthly Net</dt>
      </dl>
    </li>;
  }
}
export const Headers  = connect(getExpenses)(HeaderComponent);

function getExpenses(state) {
  return {
    expenses: state.expenses
  };
}
