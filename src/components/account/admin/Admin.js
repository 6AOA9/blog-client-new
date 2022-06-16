import { Routes, Route } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AddCat from "./categories/AddCat";
import AddTag from "./tag/AddTag";
import Verified from "./verified/Verified";




const Admin = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <AdminSidebar />
          <div className="col-lg-9">
            <Routes>
              <Route path="/categories" element={<AddCat/>} />
              <Route path="/tag" element={<AddTag/>} />
              <Route path="/verified" element={<Verified/>} />


            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;