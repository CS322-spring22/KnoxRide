import './HomePage.css';
import logo from './logopic.jpg';
function HomePage() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
            <nav className = 'logopic' >
            <img src={logo} alt="logo" />
            </nav>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="/request" className="nav-link">Make a Request</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">History</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">Become a Driver</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact Us</a>
                </li>
                <li className = "nav-item">
                    <a href = '#' className = 'nav-link'>My Account</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Sign Out</a>
                </li>
            </ul>
        </nav>
</header>
<div className="row">
  <div className="column">
  <h1>MY REQUESTS</h1>
  </div>
  
  <div className="column">
  <h1>PENDING</h1>
  </div>
  <div className="column">
  <h1>SOMETHING HERE</h1>
  </div>
</div> 

    </div>
  );
}

export default HomePage;
