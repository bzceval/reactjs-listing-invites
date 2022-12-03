import { createContext, useState } from "react"

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [addUser, setAddUser] = useState([])
  return (
    <UserContext.Provider value={ {addUser, setAddUser} }>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider