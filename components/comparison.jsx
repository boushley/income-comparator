'use strict';

import {createClass} from 'react';
import IncomeList from './income-list'

export default createClass({
  render: function() {
    return <div>
        <IncomeList incomes={this.props.incomes} />
    </div>;
  }
});
