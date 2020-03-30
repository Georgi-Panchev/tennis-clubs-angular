import { initialState, UserState } from './user.state';
import { REGISTER_USER } from './user.actions';

function register(state, action) {

}

export function userReducers(state: UserState = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return register(state, action);
        default:
            return state;
    }
}
