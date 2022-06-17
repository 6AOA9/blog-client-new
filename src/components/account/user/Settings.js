import {  useState, useRef, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { useRequest } from "../../../lib/hooks/useRequest"

const Settings = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const sendRequest = useRequest()
    const authCtx = useContext(AuthContext)
    const [user, setUser] = useState({
        name: authCtx?.user?.name,
        email: authCtx?.user?.email,
        password: '',
        password_confirmation: '',
    })
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

    const addUser = () => {
        sendRequest(`${process.env.REACT_APP_API_URL}/users/${authCtx?.user?.id}`, {}, {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            passwordConfirmation: passwordConfirmationRef.current.value
        }, {
            type: 'json',
            auth: true
        }, 'put')
            .then((response) => {
                window.alert(response?.messages?.join(' '))
                if (response?.success) {
                    navigate('/sign-out')
                }
            });
    }
    return (
        <div className="custombox clearfix">
            <h4 className="small-title">Edit Account</h4>
            <div className="row">
                <div className="col-lg-12">
                    <div className="mt-4 mb-4 d-flex justify-content-center">
                        <img src={authCtx?.user?.avatar} />
                    </div>
                    <div className="form-wrapper">

                        <h6>Change Your Name:</h6>
                        <input type={"text"}
                            onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
                            value={user?.name} ref={nameRef} className="form-control" placeholder="name" />

                        <h6>Change Your Email:</h6>
                        <input type={"text"}
                            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                            value={user?.email} ref={emailRef} className="form-control" placeholder="email" />

                        <h6 className="small-password">Change Your Password:</h6>
                        <input type={"password"}
                            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                            value={user?.password} ref={passwordRef} className="form-control" placeholder="password" />

                        <h6 className="small-password">Password Confirmation:</h6>
                        <input type={"password"}
                            onChange={(e) => { setUser({ ...user, password_confirmation: e.target.value }) }}
                            value={user?.password_confirmation} ref={passwordConfirmationRef} className="form-control" placeholder="password confirmation" />

                        <button onClick={addUser} type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings