export interface User {
    message: string;
    username: string;
    full_name: string;
    email: string;
    token: string;
}

export interface UserState{
    data: User;
    loading: boolean;
    error: string
}

interface LOGIN_START {
    type: "LOGIN_START"
}

interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS",
    payload: User;
}

interface LOGIN_ERROR {
    type: "LOGIN_ERROR"
}

export type UserAction= LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR