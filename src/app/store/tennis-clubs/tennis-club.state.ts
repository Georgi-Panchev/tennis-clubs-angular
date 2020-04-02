import { TennisClubModel } from '../../tennis-clubs/shared/tennis-club.model';

export interface TennisClubState {
    isTennisClubCreated: boolean;
    tennisClubList: TennisClubModel[];
}

export const initialState: TennisClubState = {
    isTennisClubCreated: false,
    tennisClubList: []
};
