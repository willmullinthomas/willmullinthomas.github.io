import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="page-container">
      <NavBar />
      <main className="page">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
