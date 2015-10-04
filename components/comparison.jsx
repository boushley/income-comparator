'use strict';

import IncomeList from './income-list'

export default React.createClass({
  render: function() {
    return <div>
        <IncomeList incomes={this.props.incomes} />
    </div>;
  }
});
