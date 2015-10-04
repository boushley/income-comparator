'use strict';

import IncomeDisplay from './income-display'

export default React.createClass({
  render: function() {
    let displays = [];
    this.props.incomes.forEach(function(i) {
      displays.push(<IncomeDisplay income={i} />);
    });
    return <ul className="horizontal-list">
      {displays}
    </ul>;
  }
});

