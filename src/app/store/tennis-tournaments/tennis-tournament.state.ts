import { TennisTournamentModel } from '../../tennis-tournaments/shared/tennis-tournament.model';

export interface TennisTournamentState {
    isTennisTournamentCreated: boolean;
    tennisTournamentList: TennisTournamentModel[];
    tennisTournament: TennisTournamentModel;
}

export const initialState: TennisTournamentState = {
    isTennisTournamentCreated: false,
    tennisTournamentList: [],
    tennisTournament: null
};
