import { TennisClubModel } from '../../tennis-clubs/shared/tennis-club.model';

export interface TennisClubState {
    isTennisClubCreated: boolean;
    tennisClubList: TennisClubModel[];
    tennisClub: TennisClubModel;
}

export const initialState: TennisClubState = {
    isTennisClubCreated: false,
    tennisClubList: [],
    tennisClub: null
};
