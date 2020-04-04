import { userReducers } from './users/user.reducers';
import { tennisClubReducers } from './tennis-clubs/tennis-club.reducers';
import { tennisTournamentReducers } from './tennis-tournaments/tennis-tournament.reducers';

export const appReducers = {
    users: userReducers,
    tennisClubs: tennisClubReducers,
    tennisTournaments: tennisTournamentReducers
};
