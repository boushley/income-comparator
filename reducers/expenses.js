export const initialState = [
    {
        name: 'Federal Taxes',
        effects: {
            'self': { percent: 0.25 },
            'employee': { percent: 0.18 }
        }
    },
    {
        name: 'State Taxes',
        effects: {
            'self': { percent: 0.015 },
            'employee': {}
        }
    },
    {
        name: 'Health Insurance',
        effects: {
            'self': { fixed: 586 },
            'employee': { fixed: 100 }
        }
    },
    {
        name: 'Tithing',
        effects: {
            'self': { percent: 0.1 },
            'employee': { percent: 0.1 }
        }
    },
];

export default function(state=initialState, action) {
    return state;
};
