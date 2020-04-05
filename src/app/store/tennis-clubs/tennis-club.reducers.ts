import { initialState, TennisClubState } from './tennis-club.state';
import {
    CREATE_TENNIS_CLUB,
    READ_TENNIS_CLUB_LIST,
    READ_ONE_TENNIS_CLUB,
    EDIT_TENNIS_CLUB,
    REMOVE_TENNIS_CLUB
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

function readOne(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        tennisClub: payload.club
    });
}

function edit(state, action) {
    const payload = action.payload;
    if (payload.success) {
        const filteredTennisClubList = state.tennisClubList
            .filter((club) => club._id !== payload.club._id);
        return Object.assign({}, state, {
            tennisClubList: [ ...filteredTennisClubList, payload.club ],
            tennisClub: payload.club,
            isTennisClubEdited: payload.success
        });
    }

    return state;
}

function remove(state, action) {
    const payload = action.payload;
    if (payload.success) {
        const editedTennisClubList = state.tennisClubList
            .filter((club) => club._id !== payload.clubId);
        return Object.assign({}, state, {
            tennisClubList: editedTennisClubList,
            isTennisClubRemoved: payload.success
        });
    }

    return state;
}

export function tennisClubReducers(state: TennisClubState = initialState, action) {
    switch (action.type) {
        case CREATE_TENNIS_CLUB:
            return create(state, action);
        case READ_TENNIS_CLUB_LIST:
            return read(state, action);
        case READ_ONE_TENNIS_CLUB:
            return readOne(state, action);
        case EDIT_TENNIS_CLUB:
            return edit(state, action);
        case REMOVE_TENNIS_CLUB:
            return remove(state, action);
        default:
            return state;
    }
}
