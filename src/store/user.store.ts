import { User } from "@supabase/gotrue-js";
import create from "zustand";

type Nullable<T> = T | undefined | null;

interface UserStore {
    user: Nullable<User>;
    saveUser: (user: User) => void;
    removeUser: () => void;
}

const USER_STORE = create<UserStore>(SET => ({
    user: null,
    saveUser: (user: User) => SET(() => ({ user: user })),
    removeUser: () => SET(() => ({ user: null }))
}))


export default USER_STORE;
