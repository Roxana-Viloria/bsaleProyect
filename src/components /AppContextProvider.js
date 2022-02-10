import React, {useState} from "react";

export const AppContext = React.createContext();

export default function AppProvider ({children}){

    const [category, setCategory]= useState(0)
    const [search, setSearch]=useState("")
    const [isPress, setPress]= useState (false)
    


    return (
        <AppContext.Provider
            value ={{ category: [category, setCategory], search:[search, setSearch], isPress:[isPress, setPress] }}
            >
            {children}
        </AppContext.Provider>
    )
}