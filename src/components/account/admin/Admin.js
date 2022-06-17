import { Routes, Route } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import Categories from "./categories/Categories";
import Tags from "./tag/Tags";
import Posts from "./posts/Posts";
import Options from "./options/Options";
import Comments from "./comments/Comments";

const Admin = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<AdminSidebar />
					<div className="col-lg-9">
						<Routes>
							<Route exact path="/" element={<Posts />} />
							<Route path="/posts" element={<Posts />} />
							<Route path="/categories" element={<Categories />} />
							<Route path="/tags" element={<Tags />} />
							<Route path="/options" element={<Options />} />
							<Route path="/comments" element={<Comments />} />
						</Routes>
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;
