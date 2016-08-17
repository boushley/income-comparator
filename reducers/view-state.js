export const initialState = {
    settingsOpen: false
};

export default function(state=initialState, action) {
    if (action.type === TOGGLE_SETTINGS) {
        return Object.assign({}, state, {settingsOpen: !state.settingsOpen});
    } else {
        return state;
    }
};

export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
