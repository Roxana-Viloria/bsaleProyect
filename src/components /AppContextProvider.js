import React, {useState} from "react";

export const AppContext = React.createContext();


/**
 * App Context provider con todos los estados que necesita la app
 * @param {Object} props
 * @param {JSX.Element} props.children 
 * @returns {JSX.Element} AppContext Provider
 */
export default function AppProvider ({children}){

    const [category, setCategory]= useState(0)
    const [search, setSearch]=useState(null)
    const [isPress, setPress]= useState (false)
    const [products, setProducts]= useState ([])


    return (
        <AppContext.Provider
            value ={{ category: [category, setCategory], search:[search, setSearch], isPress:[isPress, setPress], elements:[products, setProducts] }}
            >
            {children}
        </AppContext.Provider>
    )
}