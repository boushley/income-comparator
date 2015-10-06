export const initialState = [
    {type: 'hourly', rate: 60, employmentType: 'self'},
    {type: 'salary', wage: 80500, employmentType: 'employee'}
];

export default function(state=initialState, action) {
    return state;
};
