import "./userHomePage.css";
import logo from "./logopic.png";
import { auth } from "../firebaseconfig/fire2.js";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const history = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => history("/"));
  };

  return (
    <div className="AppUser">
      <header className="headerUser">
        <nav className="navbarUser">
          <nav className="logopicuserhome">
            <a href="/homepage">
              <img className="userHome" src={logo} alt="logo" />
            </a>
          </nav>
          <ul className="nav-menu-home">
            <li className="nav-item-home">
              <a href="/request" className="nav-link-home">
                Make a Request
              </a>
            </li>
            <li className="nav-item-home">
              <a href="#" className="nav-link-home">
                History
              </a>
            </li>
            <li className="nav-item-home">
              <a href="/driverfeed" className="nav-link-home">
                Become a Driver
              </a>
            </li>
            <li className="nav-item-home">
              <a href="/contact" className="nav-link-home">
                Contact Us
              </a>
            </li>
            <li className="nav-item-home">
              <button className="button-nav-link" onClick={handleLogout}>
                {" "}
                Sign Out{" "}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {
        // END OF NAVBAR
      }
      <div className="rowHome">
        <div className="columnHome">
          <h1>MY REQUESTS</h1>
        </div>

        <div className="columnHome">
          <h1>PENDING</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
