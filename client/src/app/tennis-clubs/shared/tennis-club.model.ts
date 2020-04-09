import { TennisTournamentModel } from '../../tennis-tournaments/shared/tennis-tournament.model';

export interface TennisClubModel {
    _id?: string;
    title: string;
    imageUrl: string;
    city: string;
    rank: string;
    courts: number;
    hasLighting: boolean;
    hasIndoorCourts: boolean;
    tournaments?: TennisTournamentModel[];
}
