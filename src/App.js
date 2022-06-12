import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
	return (
		<div id="wrapper">
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				{/* <Route path="/blog" element /> */}
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
