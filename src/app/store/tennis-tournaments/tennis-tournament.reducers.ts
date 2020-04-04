import { initialState, TennisTournamentState } from './tennis-tournament.state';
import {
    CREATE_TENNIS_TOURNAMENT,
    READ_TENNIS_TOURNAMENT_LIST,
    READ_ONE_TENNIS_TOURNAMENT,
    EDIT_TENNIS_TOURNAMENT
} from './tennis-tournament.actions';

function create(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        isTennisTournamentCreated: payload.success
    });
}

function read(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        tennisTournamentList: payload.tournaments
    });
}

function readOne(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        tennisTournament: payload.tournament
    });
}

function edit(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        isTennisTournamentEdited: payload.success
    });
}

export function tennisTournamentReducers(state: TennisTournamentState = initialState, action) {
    switch (action.type) {
        case CREATE_TENNIS_TOURNAMENT:
            return create(state, action);
        case READ_TENNIS_TOURNAMENT_LIST:
            return read(state, action);
        case READ_ONE_TENNIS_TOURNAMENT:
            return readOne(state, action);
        case EDIT_TENNIS_TOURNAMENT:
            return edit(state, action);
        default:
            return state;
    }
}
