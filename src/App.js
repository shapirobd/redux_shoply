import ProductsList from "./ProductsList";
import NavBar from "./NavBar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header container-fluid">
				<NavBar />
				<ProductsList />
			</header>
		</div>
	);
}

export default App;
