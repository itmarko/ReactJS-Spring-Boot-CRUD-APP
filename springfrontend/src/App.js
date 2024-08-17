import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Home from "./Home";
import StudentView from "./component/student/StudentView";
import AddStudent from "./component/student/AddStudent.jsx";
import EditStudent from "./component/student/EditStudent.jsx";
import StudentProfile from "./component/student/StudentProfile.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view-students" element={<StudentView />} />
          <Route exact path="/add-students" element={<AddStudent />} />
          <Route exact path="/edit-student/:id" element={<EditStudent />} />
          <Route
            exact
            path="/student-profile/:id"
            element={<StudentProfile />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
