import { initialState, TennisTournamentState } from './tennis-tournament.state';
import {
    CREATE_TENNIS_TOURNAMENT
} from './tennis-tournament.actions';

function create(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        isTennisTournamentCreated: payload.success
    });
}

export function tennisTournamentReducers(state: TennisTournamentState = initialState, action) {
    switch (action.type) {
        case CREATE_TENNIS_TOURNAMENT:
            return create(state, action);
        default:
            return state;
    }
}
