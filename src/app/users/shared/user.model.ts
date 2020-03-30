import { TennisTournamentModel } from '../../tennis-tournaments/shared/tennis-tournament.model';

export interface UserModel {
    username: string;
    password: string;
    confirmPassword?: string;
    tournamentsAttended?: TennisTournamentModel[];
    roles?: string[];
}
