import { useState } from "react"
import { User } from "../../types/User"
import { AuthContext } from "./AuthContext"

export const Authprovider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<User | null>(null)

    const signin = (email: string, password: string) => {


    }

    const singout = () => { }

    return (
        <AuthContext.Provider value={{ user, signin, singout }}>
            {children}
        </AuthContext.Provider>
    )
}