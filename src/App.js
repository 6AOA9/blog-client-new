import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
	return (
		<div id="wrapper">
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
			{/* Footer will be here */}
		</div>
	);
}

export default App;
