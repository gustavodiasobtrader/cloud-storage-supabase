export interface ISignLocalParams {
    email: string;
    password: string;

}

export interface ISignUpParams extends ISignLocalParams {
    options?: ISignUpOptions;
}

export interface ISignUpOptions {
    data?: Object;
    redirectTo?: string;
}