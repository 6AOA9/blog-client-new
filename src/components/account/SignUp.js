import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

import Content from "../shared/Content"
import PageTitle from "../shared/PageTitle"

export const SignUp = () => {
    const navigate = useNavigate()
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const signup = async () => {
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        const userRegistered = await response.json()
        if (userRegistered.success) {
            // redirect to sign in
            navigate('/sign-in')
        } else {
            window.alert(userRegistered.messages)
        }
    }

    return (
        <>
            <PageTitle title={'Create your Account'} />
            <Content withSidebar={false}>
                <div className="custombox clearfix">
                    <h4 style={{ background: "#000000", color: "white" }} className="small-title">Registry Page</h4>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <form action="#" method="post" className="form-wrapper">
                                <h4>Sign Up</h4>
                                <input
                                    ref={nameRef}
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                />
                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email"
                                />
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    className="form-control"
                                    placeholder="Your Password"
                                />
                                <button onClick={signup} type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                                <Link to={"/sign-in"}>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        style={{ background: "#7FFFD4", color: "black" }}
                                    >
                                        Login
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </Content>
        </>
    );
};
