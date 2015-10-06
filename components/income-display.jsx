'use strict';

import {createClass} from 'react';
import {typeInterfaces} from '../lib/income-types';
import {FormattedNumber} from 'react-intl';


export let Display = createClass({
  render: function() {
    let income = this.props.income;
    let displayer = typeInterfaces[income.type](income);
    return <li className="col-md-2">
      <h4>{displayer.getDisplay()}</h4>
      <dl>
        <dt>Employment Type</dt>
        <dd>
          {displayer.getEmploymentType()}
        </dd>
        <dt>Monthly Gross</dt>
        <dd>
          <FormattedNumber value={displayer.getGross()} style="currency" currency="USD" />
        </dd>
      </dl>
    </li>;
  }
});
export let Headers = createClass({
  render: function() {
    return <li className="headers col-md-2">
      <h4>Headers</h4>
      <dl>
        <dt>Employment Type</dt>
        <dt>Monthly Gross</dt>
      </dl>
    </li>;
  }
});
