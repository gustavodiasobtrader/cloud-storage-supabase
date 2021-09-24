import { ISignLocalParams, ISignUpParams } from './../interfaces/authentication.interfaces';
import supabaseClient from './supabase.service';

/**
 * @description Create a user in Supabase and automatically logs-in
 * @param {Object} credentials - Object with user e-mail, password and optional meta-data
 * @returns {Object} Object handling data, session and possible error value
 */
export const signUpLocal = async (credentials: ISignUpParams) => {
    const { data, session, error } = await supabaseClient.auth.signUp({ email: credentials.email, password: credentials.password });

    return { data, session, error };
}

/**
 * @description Function to log the user into the supabase
 * @param {Object} credentials - Object with user e-mail, password and optional meta-data
 * @returns {Object} Object handling data, session and possible error value
 */
export const signInLocal = async (credentials: ISignLocalParams) => {
    const { data, session, error } = await supabaseClient.auth.signIn({ email: credentials.email, password: credentials.password })

    return { data, session, error };
}

/**
 * @description Logout the user
 * @returns {Object} Object handling a possible error value
 */
export const signOut = async () => {
    const { error } = await supabaseClient.auth.signOut();

    return error;
}


/**
 * @description Return the user session
 * @returns {Object} Object handling the user's session data
 */
export const getUserSession = () => {
    const session = supabaseClient.auth.session();

    return session;
}

/**
 * @description Return the user data
 * @returns {Object} Object handling the user's info
 */
export const getUserData = () => {
    const user = supabaseClient.auth.user();

    return user;
}


/**
 * @description Return the instance of supabase auth client
 * @returns {Object} Object handling the supabaseclient methods and properties
 */
export const getAuth = () => {
    return supabaseClient.auth;
}

//TODO: Create method to update user's meta-data
//TODO: Create method to update user's password (when sign-up based on local provider)