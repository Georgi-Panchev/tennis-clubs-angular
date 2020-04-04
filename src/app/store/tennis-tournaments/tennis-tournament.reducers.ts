import { initialState, TennisTournamentState } from './tennis-tournament.state';
import {
    CREATE_TENNIS_TOURNAMENT,
    READ_TENNIS_TOURNAMENT_LIST,
    READ_ONE_TENNIS_TOURNAMENT,
    EDIT_TENNIS_TOURNAMENT,
    READ_TENNIS_TOURNAMENT_LIST_BY_CLUB,
    READ_TENNIS_TOURNAMENT_LIST_BY_USER,
    ATTEND_TENNIS_TOURNAMENT,
    LEAVE_TENNIS_TOURNAMENT,
    REMOVE_TENNIS_TOURNAMENT
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

function readByClub(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        tennisTournamentListByClub: payload.tournaments
    });
}

function readByUser(state, action) {
    const payload = action.payload;
    return Object.assign({}, state, {
        tennisTournamentListByUser: payload.tournaments
    });
}

function attend(state, action) {
    const payload = action.payload;
    if (payload.success) {
        return Object.assign({}, state, {
            tennisTournament: {
                ...state.tennisTournament,
                playersRegistered: [ ...state.tennisTournament.playersRegistered, payload.user ]
            }
        });
    }

    return state;
}

function leave(state, action) {
    const payload = action.payload;
    if (payload.success) {
        const editedPlayersRegistered = state.tennisTournament.playersRegistered
            .filter((user) => user._id !== payload.user._id);
        return Object.assign({}, state, {
            tennisTournament: {
                ...state.tennisTournament,
                playersRegistered: editedPlayersRegistered
            }
        });
    }

    return state;
}

function remove(state, action) {
    const payload = action.payload;
    if (payload.success) {
        const editedTournamentList = state.tennisTournamentList
            .filter((tournament) => tournament._id !== payload.tournamentId);
        return Object.assign({}, state, {
            tennisTournamentList: editedTournamentList,
            isTennisTournamentRemoved: payload.success
        });
    }

    return state;
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
        case READ_TENNIS_TOURNAMENT_LIST_BY_CLUB:
            return readByClub(state, action);
        case READ_TENNIS_TOURNAMENT_LIST_BY_USER:
            return readByUser(state, action);
        case ATTEND_TENNIS_TOURNAMENT:
            return attend(state, action);
        case LEAVE_TENNIS_TOURNAMENT:
            return leave(state, action);
        case REMOVE_TENNIS_TOURNAMENT:
            return remove(state, action);
        default:
            return state;
    }
}
