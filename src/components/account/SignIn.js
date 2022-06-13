import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { useRequest } from "../../lib/hooks/useRequest"
import { Link } from "react-router-dom";

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
        }, { type: 'json' }, 'POST')
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
                <div className="custombox clearfix">
                    <h4 style={{ background: "#000000", color: "white" }} className="small-title">Login Page</h4>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <form action="#" method="post" className="form-wrapper">
                                <h4>Login</h4>

                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email"
                                />
                                <input
                                    ref={passRef}
                                    type="password"
                                    className="form-control"
                                    placeholder="Your Password"
                                />
                                <button onClick={signin} type="submit" className="btn btn-primary">
                                    Login
                                </button>
                                <Link to={"/"}>
                                    <button
                                        type="submit"
                                        className="btn btn-danger"
                                        style={{ background: "#7FFFD4", color: "black" }}
                                    >
                                        Forget Password
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    )
}

export default SignIn