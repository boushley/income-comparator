'use strict';

import {Component} from 'react';
import {fromData} from '../lib/income-types';
import {federal} from '../lib/taxes';
import {FormattedNumber} from 'react-intl';


export class Display extends Component {
  render() {
    let income = fromData(this.props.income);
    let gross = income.getMonthlyGross();
    let federalIncomeTaxes = federal(income);
    let net = gross - federalIncomeTaxes;
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
        <dt>Federal Taxes</dt>
        <dd>
          <FormattedNumber value={federalIncomeTaxes} style="currency" currency="USD" />
        </dd>
        <dt>Monthly Net</dt>
        <dd>
          <FormattedNumber value={net} style="currency" currency="USD" />
        </dd>
      </dl>
    </li>;
  }
}

export class Headers extends Component {
  render() {
    return <li className="headers col-md-2">
      <h4>Headers</h4>
      <dl>
        <dt>Employment Type</dt>
        <dt>Monthly Gross</dt>
        <dt>Federal Taxes</dt>
        <dt>Monthly Net</dt>
      </dl>
    </li>;
  }
}
