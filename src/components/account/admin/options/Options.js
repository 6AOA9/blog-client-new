// import { useEffect, useState, useRef } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import { useRequest } from "../../../../lib/hooks/useRequest"

const Options = () => {

    return (
        <div className="custombox clearfix">
            <h4 className="small-title">Edit Account</h4>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-wrapper">

                        <h6>Change Your Name:</h6>
                        <input type={"text"}
                            // onChange={(e) => { setUser({ ...User, name: e.target.value }) }}
                            // value={User?.name} ref={nameRef} 
                            className="form-control" placeholder="name" />

                        <h6>Change Your Email:</h6>
                        <input type={"text"}
                            // onChange={(e) => { setUser({ ...User, email: e.target.value }) }}
                            // value={User?.email} ref={emailRef} 
                            className="form-control" placeholder="email" />

                        <h6 className="small-password">Change Your Password:</h6>
                        <input type={"text"}
                            // onChange={(e) => { setUser({ ...User, password: e.target.value }) }}
                            // value={User?.password} ref={passwordRef}
                            className="form-control" placeholder="password" />

                        {
                            // User?.profilePicture && <img src={User?.profilePicture} width='100' style={{ height: 'auto' }} />
                        }
                        <h6>Choose photo:</h6>


                    </div>
                </div>
            </div>
        </div>
    )
};

export default Options;