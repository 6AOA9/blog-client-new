import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import Admin from "./admin/Admin"
import User from "./user/User"

const Account = () => {
    
    const appCtx = useContext(AuthContext)
    
    return (
        <>
        {
            (appCtx?.user?.role == '1') && (<Admin />)
            (appCtx?.user?.role == '2') && (<User />)
        }
        </>
    )
}

export default Account