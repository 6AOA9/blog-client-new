import { Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import UserSidebar from "./UserSidebar";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import Settings from "./Settings";

const User = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <UserSidebar />
          <div className="col-lg-9">
            <Routes>
              <Route path="/posts" element={<Posts />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/add-post" element={<AddPost />} />
              <Route path="/edit/:id" element={<EditPost />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
