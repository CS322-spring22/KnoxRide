function userHistory() {
  return (
    <header className="headerUser">
      <nav className="navbarUserContact">
        <nav className="logopic">
          <a href="/homepage">
            <img className="userContactLogo" src={logo} alt="logo" />
          </a>
        </nav>
        <ul className="nav-menu-contact">
          <li className="nav-item-contact">
            <a href="/request" className="nav-link-contact">
              Make a Request
            </a>
          </li>
          <li className="nav-item-contact">
            <a href="#" className="nav-link-contact">
              History
            </a>
          </li>
          <li className="nav-item-contact">
            <a href="/driverfeed" className="nav-link-contact">
              Become a Driver
            </a>
          </li>
          <li className="nav-item-contact">
            <a href="/contact" className="nav-link-contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item-contact">
            <button className="button-nav-link" onClick={handleLogout}>
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default userHistory;
