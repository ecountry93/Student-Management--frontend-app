import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./Pages/AddStudent";
import EditStudent from "./Pages/EditStudent";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/editstudent/:id" element={<EditStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
