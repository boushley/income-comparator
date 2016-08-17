'use strict';

import {Component} from 'react';
import { connect } from 'react-redux';
import {INCOME_UPDATE} from '../actions';
import SelectField from './select-field';
import NumberField from './number-field';

class IncomeSettings extends Component {
  render() {
    let incomeElements = this.props.incomes.map(this.renderIncome.bind(this));

    return <div>
        {incomeElements}
      </div>;
  }

  renderIncome(income, idx) {
    const changeHandler = this.props.generateIncomeChangeHandler(idx);
    const incomeTypes = [{value: 'hourly', label: 'Hourly Pay'}, {value: 'salary', label: 'Salaried'}]
    const employementTypes = [{value: 'self', label: 'Self Employed'}, {value: 'employee', label: 'Full Time Employee'}]

    let payFields;
    if (income.type === 'hourly') {
      payFields = [
        <div className="form-group" key="rate">
          <label>Rate</label>
          <NumberField propName="rate" value={income.rate} onChange={changeHandler}/>
        </div>,
        <div className="form-group" key="hoursPerWeek">
          <label>Hours Per Week</label>
          <NumberField propName="hoursPerWeek" value={income.hoursPerWeek} onChange={changeHandler}/>
        </div>,
        <div className="form-group" key="weeksPerYear">
          <label>Weeks Per Year</label>
          <NumberField propName="weeksPerYear" value={income.weeksPerYear} onChange={changeHandler}/>
        </div>
      ];
    } else if (income.type === 'salary') {
      payFields = (
        <div className="form-group">
          <label>Salary</label>
          <NumberField propName="wage" value={income.wage} onChange={changeHandler}/>
        </div>
      );
    } else {
      console.error('Unhandled payment type in settings: ', income.type, income);
      payFields = [];
    }

    return (<div key={idx} className="form-inline">
            <div className="form-group">
              <label>Employment Type:</label>
              <SelectField propName="employmentType" currentValue={income.employmentType} options={employementTypes} onChange={changeHandler} />
            </div>
            <div className="form-group">
              <label>Pay Type:</label>
              <SelectField propName="type" currentValue={income.type} options={incomeTypes} onChange={changeHandler} />
            </div>
            {payFields}
        </div>);
  }
}

function select(state) {
  return {
    incomes: state.incomes
  };
}

function actionCreator(dispatch) {
  return {
    generateIncomeChangeHandler(index) {
      return (e) => {
        const action = {
          type: INCOME_UPDATE,
          index,
          property: e.target.attributes['data-property'].value,
          value: e.target.value
        };
        console.log('Dispatching Income Update:', action);
        dispatch(action);
      };
    }
  }
};

export default connect(select, actionCreator)(IncomeSettings);
