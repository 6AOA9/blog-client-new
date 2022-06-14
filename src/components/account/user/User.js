import { Routes, Route } from "react-router-dom"
import Posts from "./Posts"
import UserSidebar from "./UserSidebar"

const User = () => {
    return (
        <>
            
            <div className="container">
                <div className="row">
                    <UserSidebar />
                    <div className="col-lg-9">
                    <Routes>
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/settings' element={<>settings</>} />
                    </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User