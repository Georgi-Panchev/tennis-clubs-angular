import { initialState, TennisTournamentState } from './tennis-tournament.state';
import {
    CREATE_TENNIS_TOURNAMENT,
    READ_TENNIS_TOURNAMENT_LIST
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

export function tennisTournamentReducers(state: TennisTournamentState = initialState, action) {
    switch (action.type) {
        case CREATE_TENNIS_TOURNAMENT:
            return create(state, action);
        case READ_TENNIS_TOURNAMENT_LIST:
            return read(state, action);
        default:
            return state;
    }
}
