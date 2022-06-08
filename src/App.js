import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
	return (
		<div id="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
