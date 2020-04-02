import { UserState } from './users/user.state';
import { TennisClubState } from './tennis-clubs/tennis-club.state';

export interface AppState {
    users: UserState;
    tennisClubs: TennisClubState;
}
