import { userReducers } from './users/user.reducers';
import { tennisClubReducers } from './tennis-clubs/tennis-club.reducers';

export const appReducers = {
    users: userReducers,
    tennisClubs: tennisClubReducers
};
