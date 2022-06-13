import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Blog from "./pages/blog/Blog";
import Home from "./pages/home/Home";
import { Login } from "./pages/auth/login/Login";
import Post from "./pages/post/Post";
import Taxonomy from "./pages/taxonomy/Taxonomy";
import { SignUp } from "./pages/auth/siginup/SignUp";

function App() {
  return (
    <div id="wrapper">
      <Header />
      
      <Routes>
      <Route exact path="/" element={<Home />} />
			<Route path="/login" element={<Login />}  />
			<Route path="/signup" element={<SignUp />}  />

      <Route path="/blog" element={<Blog />} />
      <Route path="/category/:id" element={<Taxonomy taxonomy='category' />} />
      <Route path="/tag/:id" element={<Taxonomy taxonomy='tag' />} />
      <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
