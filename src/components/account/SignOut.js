import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

const SignOut = () => {

    const authContext = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        authContext.logout()
        navigate('/sign-in')
    }, [])

    return (
        <></>
    )
}

export default SignOut