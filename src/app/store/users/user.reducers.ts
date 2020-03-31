import { initialState, UserState } from './user.state';
import { REGISTER_USER } from './user.actions';

function register(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        isUserRegistered: payload.success
    });
}

export function userReducers(state: UserState = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return register(state, action);
        default:
            return state;
    }
}
