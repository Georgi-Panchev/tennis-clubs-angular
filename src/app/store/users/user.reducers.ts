import { initialState, UserState } from './user.state';
import { REGISTER_USER, LOGIN_USER } from './user.actions';

function register(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        isUserRegistered: payload.success
    });
}

function login(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        isUserAuthenticated: payload.success,
        token: payload.token,
        user: payload.user ? payload.user : {}
    });
}

export function userReducers(state: UserState = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return register(state, action);
        case LOGIN_USER:
            return login(state, action);
        default:
            return state;
    }
}
