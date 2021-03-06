import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className="col-lg-3 mb-5">
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="categories">Categories</Link>
                </li>
                <li className="list-group-item">
                    <Link to="tags">Tags</Link>
                </li>
                <li className="list-group-item">
                    <Link to="posts">Posts</Link>
                </li>
                <li className="list-group-item">
                    <Link to="comments">Comments</Link>
                </li>
                <li className="list-group-item">
                    <Link to="options">Options</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/sign-out">Sign Out </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
