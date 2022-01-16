import { createContext } from "react";

export const CardContext = createContext({
    cart: [],
    cartHandler: () => { },
    removeCart: () => { },
});