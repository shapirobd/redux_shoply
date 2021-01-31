import ProductsList from "./ProductsList";
import NavBar from "./NavBar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<header className="App-header container-fluid pt-5">
				<ProductsList />
			</header>
		</div>
	);
}

export default App;
