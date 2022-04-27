import "./userHomePage.css";
import logo from "./logopic.png";
function HomePage() {
  return (
    <div className="AppUser">
      <header className="headerUser">
        <nav className="navbarUser">
          <nav className="logopic">
            <a href="/homepage">
              <img src={logo} alt="logo" />
            </a>
          </nav>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/request" className="nav-link">
                Make a Request
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                History
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Become a Driver
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                My Account
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sign Out
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="rowHome">
        <div className="columnHome">
          <h1>MY REQUESTS</h1>
        </div>

        <div className="columnHome">
          <h1>PENDING</h1>
        </div>
        <div className="columnHome">
          <h1>SOMETHING HERE</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
