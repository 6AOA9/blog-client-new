import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="col-lg-3">
      <ul className="list-group">
        <h4>Admin Dashboard</h4>
        <li className="list-group-item">
          <Link to="categories">Categories</Link>
        </li>
        <li className="list-group-item">
          <Link to="settings">Settings</Link>
        </li>
        <li className="list-group-item">
          <Link to="add-post">New Article </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;