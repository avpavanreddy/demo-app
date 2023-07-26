import "./App.css"
import Navbar from "./components/Navbar.js"
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create.js";
import Read from "./components/Read.js";
import Update from "./components/Update.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/all" element={<Read />} />
        <Route path="/:id" element={<Update />} />
      </Routes>


    </div>
  );
}

export default App;
