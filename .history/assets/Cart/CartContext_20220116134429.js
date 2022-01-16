import { createContext } from "react";

export const AuthContext = createContext({
    cart: [],
    cartHandler: () => { },
    removeCart: () => { },
});