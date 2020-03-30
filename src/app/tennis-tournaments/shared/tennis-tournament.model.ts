import { UserModel } from '../../users/shared/user.model';

export interface TennisTournamentModel {
    _id?: string;
    title: string;
    imageUrl: string;
    balls: string;
    fee: number;
    playersRegistered?: UserModel[];
}
