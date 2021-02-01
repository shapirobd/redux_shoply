import React from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<header className="App-header container-fluid pt-5">
				<Routes />
			</header>
		</div>
	);
}

export default App;
