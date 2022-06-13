import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { useRequest } from "../../lib/hooks/useRequest"
import Content from "../shared/Content"
import PageTitle from "../shared/PageTitle"

const SignIn = () => {

    const appCtx = useContext(AuthContext)

    const emailRef = useRef()
    const passRef = useRef()

    const navigate = useNavigate()
    const sendRequest = useRequest()

    const signin = () => {
        const email = emailRef.current.value
        const password = passRef.current.value
        sendRequest(`${process.env.REACT_APP_API_URL}/users/signin`, {}, {
            email,
            password
        }, {type: 'json'}, 'POST')
            .then((response) => {
                if (response.success) {
                    appCtx.login(response)
                    navigate('/account')
                }
            })
    }

    return (
        <>
            <PageTitle title={'Sign in to your account'} />
            <Content withSidebar={false}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2">
                            <div className="form-wrapper">
                                <input ref={emailRef} className="form-control" placeholder="Your Email" />
                                <input ref={passRef} className="form-control" placeholder="Your Password" type='password' />
                                <button onClick={signin} type="button" className="btn btn-primary">Signin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    )
}

export default SignIn