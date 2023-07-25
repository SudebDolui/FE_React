import React from "react";

// Note: Step 1.

const UserContext = React.createContext("Guest"); // Info: Default Value here is "Guest"

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
