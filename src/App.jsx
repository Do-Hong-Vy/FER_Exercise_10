import Header from "./components/Header";
import Forms from "./components/Form";
import Banner from "./components/Carousels";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="bg-dark min-vh-100" style={{ backgroundColor: "#2f3033" }}>
      <Header />
      <Banner />
      <Menu />
      <Forms />
    </div>
  );
}

export default App;
