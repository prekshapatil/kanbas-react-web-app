// import {Link} from "react-router-dom";

// function Kanbas() {
//  return(
//   <div>
//    <Link to="/Labs/a3">A3</Link> |
//    <Link to="/Kanbas">Kanbas</Link> |
//    <Link to="/hello">Hello</Link> |
//    <h1>Kanbas</h1>
//   </div>
//  )
// }

// import Nav from "../Nav";
// function Kanbas() {
//  return (
//    <div>
//      <Nav/>
//      <h1>Kanbas</h1>
//    </div>
//  )
// }

// import { Route } from "react-router";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";



function Kanbas() {
    return (
      <div className="d-flex">
        <KanbasNavigation/>
        <div style={{ flexGrow: 1 }}>
          <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
  );}
  export default Kanbas;