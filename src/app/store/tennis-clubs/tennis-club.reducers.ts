import { initialState, TennisClubState } from './tennis-club.state';
import {
    CREATE_TENNIS_CLUB
} from './tennis-club.actions';

function create(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        isTennisClubCreated: payload.success
    });
}

export function tennisClubReducers(state: TennisClubState = initialState, action) {
    switch (action.type) {
        case CREATE_TENNIS_CLUB:
            return create(state, action);
        default:
            return state;
    }
}
