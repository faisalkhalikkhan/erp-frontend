import "./App.css";
import "antd/dist/antd.css";
import Login from "./components/Login/Login";
import LandingPage from "./LandingPage";
import Tspinner from "./reuseable-components/Truba-Spinner/Tspinner";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <LandingPage /> */}
      <Tspinner />
    </div>
  );
}

export default App;
