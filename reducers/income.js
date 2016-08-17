import {INCOME_UPDATE} from '../actions';

export const initialState = [
    {type: 'hourly', rate: 60, hoursPerWeek: 40, weeksPerYear: 48, employmentType: 'self'},
    {type: 'salary', wage: 80000, employmentType: 'employee'},
];

export default function(state=initialState, action) {
    if (action.type === INCOME_UPDATE) {
        let currentIncome = state[action.index];
        let changedValue = {};
        changedValue[action.property] = action.value;
        return [
            ...state.slice(0, action.index),
            Object.assign({}, currentIncome, changedValue),
            ...state.slice(action.index+1)
        ];
    } else {
        return state;
    }
};
