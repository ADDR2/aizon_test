export interface LoginUserBody {
    username: string;
    password: string;
}

export interface SignupUserBody extends LoginUserBody {
    role: string;
}