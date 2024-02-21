import { Link, useLocation } from "react-router-dom";
import "./index.css";
import logo from "../images/NEULogo.png";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelopeOpenText, FaClock, FaDesktop, FaCircle, FaQuestionCircle, FaArrowRight } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" style={{color: "lightgrey"}}/> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" style={{color: "red"}} /> },
    { label: "Courses", icon: <FaBook className="fs-2" style={{color: "red"}}/> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" style={{color: "red"}}/>  },
    { label: "Inbox", icon: <FaEnvelopeOpenText className="fs-2" style={{color: "red"}}/> },
    { label: "History", icon: <FaClock className="fs-2" style={{color: "red"}}/> },
    { label: "Studio", icon: <FaDesktop className="fs-2" style={{color: "red"}}/> },
    { label: "Commons", icon: <FaArrowRight className="fs-2" style={{color: "red"}}/> },
    { label: "Help", icon: <FaQuestionCircle className="fs-2" style={{color: "red"}}/> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li> <Link to={`https://www.northeastern.edu/`}><img src={logo} className="wd-logo"/></Link> </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;