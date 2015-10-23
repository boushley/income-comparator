export const initialState = [
    {type: 'hourly', rate: 60, hoursPerWeek: 40, weeksPerYear: 45, employmentType: 'self'},
    {type: 'salary', wage: 80500, employmentType: 'employee'}
];

export default function(state=initialState, action) {
    return state;
};
