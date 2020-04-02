import { initialState, TennisClubState } from './tennis-club.state';
import {
    CREATE_TENNIS_CLUB,
    READ_TENNIS_CLUB_LIST
} from './tennis-club.actions';

function create(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        isTennisClubCreated: payload.success
    });
}

function read(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        tennisClubList: payload.clubs
    });
}

export function tennisClubReducers(state: TennisClubState = initialState, action) {
    switch (action.type) {
        case CREATE_TENNIS_CLUB:
            return create(state, action);
        case READ_TENNIS_CLUB_LIST:
            return read(state, action);
        default:
            return state;
    }
}
