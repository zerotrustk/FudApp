// import { createContext } from "react";
import React from "react";
import { productsData } from "../Data";


export const ShopContext = React.createContext();

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = React.useState(productsData);
    return (
        <ShopContext.Provider value={{ products }}>
            {children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;