import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    const [selectBook, setSelectBook] = useState(null);

    return (
        <ProductContext.Provider value={{ books, setBooks, selectBook, setSelectBook }}>
            {props.children}
        </ProductContext.Provider>
    )
}