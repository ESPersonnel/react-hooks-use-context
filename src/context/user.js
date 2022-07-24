import React, { useState } from "react";

const userContext = React.createContext();

function UserProvider({ children}) {
    const [user, setUser] = useState(null);
    return <userContext.Provider value={{ user, setUser }}>
        {children}
    </userContext.Provider>;
}

export { userContext, UserProvider };