import { Routes, Route } from "react-router-dom";
import Account from "./components/account/Account";
import SignIn from "./components/account/SignIn";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Taxonomy from "./pages/taxonomy/Taxonomy";
import { SignUp } from "./components/account/SignUp";
import AddPost from "./components/account/user/AddPost";
import Posts from "./components/account/user/Posts";
import EditPost from "./components/account/user/EditPost";
import Categories from "./components/sidebar/widgets/Categories";
import Tags from "./components/account/admin/tag/Tags";
import AdminPosts from "./components/account/admin/posts/Posts";
import Settings from "./components/account/user/Settings";
import SignOut from "./components/account/SignOut";

const App = () => {
	return (
		<div id="wrapper">
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/category/:id" element={<Taxonomy taxonomy='category' />} />
				<Route path="/tag/:id" element={<Taxonomy taxonomy='tag' />} />
				<Route path="/post/:id" element={<Post />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/sign-out" element={<SignOut />} />


				<Route path="/account" element={<Account />}>
					<Route path='/account/posts' element={<Posts />} />
					<Route path="/account/add-post" element={<AddPost />} />
					<Route path="/account/edit/:id" element={<EditPost />} />
					<Route path="/account/settings" element={<Settings />} />
				</Route>

				<Route path="/account" element={<Account />}>
					<Route path='/account/categories' element={<Categories />} />
					<Route path="/account/tags" element={<Tags />} />
					<Route path="/account/posts" element={<AdminPosts />} />


				</Route>



				<Route path="*" element={<>Not found</>} />
			</Routes >
			<Footer />
		</div >
	);
}

export default App;
