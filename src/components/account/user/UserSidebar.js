import { Link } from "react-router-dom"

const UserSidebar = () => {
    return (
        <div className="col-lg-3">
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to='posts'>Posts</Link>
                </li>
                <li className="list-group-item">
                    <Link to='settings'>Settings</Link>
                </li>
            </ul>
        </div>
    )
}

export default UserSidebar