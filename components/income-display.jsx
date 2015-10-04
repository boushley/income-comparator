'use strict';

import {typeInterfaces} from '../lib/income-types'

export default React.createClass({
  render: function() {
    let income = this.props.income;
    let displayer = typeInterfaces[income.type](income);
    return <li>
      <h4>{displayer.getDisplay()}</h4>
      <dl>
        <dt>Monthly Gross</dt>
        <dd>{displayer.getGross()}</dd>
      </dl>
    </li>;
  }
});

