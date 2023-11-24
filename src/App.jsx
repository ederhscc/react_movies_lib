import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <h2>Movies Lib</h2>
      <Outlet />
    </>
  );
}

export default App;
