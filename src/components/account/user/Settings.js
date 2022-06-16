import { useEffect, useState, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useRequest } from "../../../lib/hooks/useRequest"

const Settings = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const sendRequest = useRequest()
    const [User, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const profilePictureRef = useRef()


    const addUser = () => {
        const formdata = new FormData();
        formdata.append('name', nameRef.current.value)
        formdata.append('email', emailRef.current.value)
        formdata.append('password', passwordRef.current.value)
        formdata.append('profilePicture', profilePictureRef.current.files[0])
        sendRequest(`${process.env.REACT_APP_API_URL}/users/${id}`, {}, formdata, { auth: true }, 'put')
            .then((response) => {
                window.alert(response?.messages?.join(' '))
                if (response?.success) {
                    navigate('/account')
                }
            });
    }
    return (
        <div className="custombox clearfix">
            <h4 className="small-title">Edit Account</h4>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-wrapper">

                        <h6>Change Your Name:</h6>
                        <input type={"text"}
                            onChange={(e) => { setUser({ ...User, name: e.target.value }) }}
                            value={User?.name} ref={nameRef} className="form-control" placeholder="name" />

                        <h6>Change Your Email:</h6>
                        <input type={"text"}
                            onChange={(e) => { setUser({ ...User, email: e.target.value }) }}
                            value={User?.email} ref={emailRef} className="form-control" placeholder="email" />

                        <h6 className="small-password">Change Your Password:</h6>
                        <input type={"text"}
                            onChange={(e) => { setUser({ ...User, password: e.target.value }) }}
                            value={User?.password} ref={passwordRef} className="form-control" placeholder="password" />

                        {
                            User?.profilePicture && <img src={User?.profilePicture} width='100' style={{ height: 'auto' }} />
                        }
                        <h6>Choose photo:</h6>
                        <input type={"file"} ref={profilePictureRef} className="form-control" placeholder="profilePicture" />

                        <button onClick={addUser} type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings