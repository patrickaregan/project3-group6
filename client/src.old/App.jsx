import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
