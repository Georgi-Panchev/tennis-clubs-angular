export interface UserState {
    isUserRegistered: boolean;
    isUserAuthenticated: boolean;
    token: string;
    user: {
        userId: string;
        username: string;
        roles: string[];
    };
}

export const initialState: UserState = {
    isUserRegistered: false,
    isUserAuthenticated: false,
    token: null,
    user: {
        userId: null,
        username: null,
        roles: []
    }
};
