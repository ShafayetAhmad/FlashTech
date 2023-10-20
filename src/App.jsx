import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto text-lg">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
