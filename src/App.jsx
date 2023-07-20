import "./App.css";
import About from "./Components/Pages/About";
import Footers from "./Components/Pages/Footers";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Footers />
    </div>
  );
}

export default App;
