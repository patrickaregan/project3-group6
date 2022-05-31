import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Create from "./components/Create/create"
import MyAccount from "./components/MyAccount/MyAccount";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/my_account' element={<MyAccount/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
