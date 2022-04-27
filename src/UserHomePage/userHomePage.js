import './userHomePage.css';
import logo from './logopic.png';
function HomePage() {
  return (
    <div className="AppUser">
      <header className="headerUser">
        <nav className="navbarUser">
            <nav className = 'logopicuserhome' >
            <a href="/homepage">
            <img className = 'userHome' src={logo} alt="logo" />
            </a>
            </nav>
            <ul className="nav-menu-home">
                <li className="nav-item-home">
                    <a href="/request" className="nav-link-home">Make a Request</a>
                </li>
                <li className="nav-item-home">
                    <a href="#" className="nav-link-home">History</a>
                </li>
                <li className="nav-item-home">
                    <a href="/" className="nav-link-home">Become a Driver</a>
                </li>
                <li className="nav-item-home">
                    <a href="/contact" className="nav-link-home">Contact Us</a>
                </li>
                <li className = "nav-item-home">
                    <a href = '#' className = 'nav-link-home'>My Account</a>
                </li>
                <li className="nav-item-home">
                    <a href="#" className="nav-link-home">Sign Out</a>
                </li>
            </ul>
        </nav>
</header>
<div className="rowHome">
  <div className="columnHome">
  <h1 className = 'homeColumn'>MY REQUESTS</h1>
  </div>
  
  <div className="columnHome">
  <h1 className = 'homeColumn'>PENDING</h1>
  </div>
  <div className="columnHome">
  <h1 className = 'homeColumn'>SOMETHING HERE</h1>
  </div>
</div> 

    </div>
  );
}

export default HomePage;
