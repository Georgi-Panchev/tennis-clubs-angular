import { UserState } from './users/user.state';
import { TennisClubState } from './tennis-clubs/tennis-club.state';
import { TennisTournamentState } from './tennis-tournaments/tennis-tournament.state';

export interface AppState {
    users: UserState;
    tennisClubs: TennisClubState;
    tennisTournaments: TennisTournamentState;
}
