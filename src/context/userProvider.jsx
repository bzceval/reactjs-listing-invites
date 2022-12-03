import { createContext } from "react"

export const UserContext = createContext()

const userContextProvider = ({children}) => {
    const [addUser, setAddUser] = useState([])
  return (
    <UserContext.Provider value={ {addUser, setAddUser} }>
        {children}
    </UserContext.Provider>
  )
}

export default userContextProvider