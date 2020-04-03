import { TennisClubModel } from '../../tennis-clubs/shared/tennis-club.model';

export interface TennisClubState {
    isTennisClubCreated: boolean;
    tennisClubList: TennisClubModel[];
    tennisClub: TennisClubModel;
    isTennisClubEdited: boolean;
    isTennisClubRemoved: boolean;
}

export const initialState: TennisClubState = {
    isTennisClubCreated: false,
    tennisClubList: [],
    tennisClub: null,
    isTennisClubEdited: false,
    isTennisClubRemoved: false
};
