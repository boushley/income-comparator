import { combineReducers } from 'redux';
import incomeReducer from './income';
import expenseReducer from './expenses';
import viewStateReducer from './view-state';

export default combineReducers({
    incomes: incomeReducer,
    expenses: expenseReducer,
    viewState: viewStateReducer
});
