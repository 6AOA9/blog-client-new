import { Routes, Route } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import Categories from "./categories/Categories";
import Tags from "./tag/Tags";
import Posts from "./posts/Posts";




const Admin = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12"><h4>Admin Dashboard</h4></div>
				</div>
				<div className="row">
					<AdminSidebar />
					<div className="col-lg-9">
						<Routes>
							<Route path="/categories" element={<Categories />} />
							<Route path="/tags" element={<Tags />} />
							<Route path="/posts" element={<Posts />} />
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;
