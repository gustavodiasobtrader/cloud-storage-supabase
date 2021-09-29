import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";

const USER_STORE = create<any>(SET => ({
    user: null,
    saveUser: (user: any) => SET(() => ({ user: user })),
    removeUser: () => SET(() => ({ user: null }))
}))


export default USER_STORE;

mountStoreDevtool('USER STORE', USER_STORE);
