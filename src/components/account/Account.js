import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import Admin from "./admin/Admin"
import User from "./user/User"

const Account = () => {

    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!authCtx.isAuthenticated) {
            navigate('/sign-in')
        }
    }, [])

    return (
        <div className="my-5">
            {
                (authCtx?.user?.role == '1') && (<Admin />)
            }
            {
                (authCtx?.user?.role == '2') && (<User />)
            }
        </div>
    )
}

export default Account