import { Routes, Route } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AddCat from "./categories/AddCat";
import AddTag from "./tag/AddTag";





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
              {/* <Route path="/edit/:id" element={<EditPost />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;