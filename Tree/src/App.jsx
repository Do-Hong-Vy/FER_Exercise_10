import Header from "./components/Header";
import PlantDetail from "./components/PlantDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "#f5f7f5", minHeight: "100vh" }}>
      <Header />
      <PlantDetail />
    </div>
  );
}

export default App;
