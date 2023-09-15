import { createContext, useContext, useState } from "react";

// create the context itself. THIS IS WHAT COMPONENTS WILL IMPORT
export const primaryContext = createContext();

// create Provider. THIS IS WHAT WILL SURROUND THE APP

export const PrimaryProvider = (props) => {
    // 1. create our state that our app needs
    const [user, setUser] = useState({
        name: "Jared",
        email: "Jared@gmail.com"
    })
    const [activities, setActivities] = useState(["basketball", "running", "poker"])

    // 2. Return the ACTUAL provider of the context
    return (
        <primaryContext.Provider value={
            {
                user,
                setUser,
                activities,
                setActivities
            }
        }>
                {props.children}  
        </primaryContext.Provider>
    )

}