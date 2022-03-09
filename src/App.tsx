import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import AnimatedSwitch from "./pages/AnimatedSwitch";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatedSwitch />
      </Router>
    </>
  );
}

export default App;
