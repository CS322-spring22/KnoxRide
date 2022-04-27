import "./Contact.css";
import logo from "../UserHomePage/logopic.png";
import "../RequestPage/Request.css";

function contactUs() {
  return (
    <div className="AppUserContact">
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
              <a href="/" className="nav-link-contact">
                Become a Driver
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="/contact" className="nav-link-contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="#" className="nav-link-contact">
                Sign Out
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <form className="Req" method="post" onsubmit="return ValidateForm(this);">
        <div className="itemReq">
          <p className="Req">Name</p>
          <div className="name-item">
            <input
              className="contact"
              type="text"
              name="name"
              placeholder="First name"
            />
            <input
              className="contact"
              type="text"
              name="name"
              placeholder="Last name"
            />
          </div>
          <div className="itemReq">
            <p className="Req">Email</p>
            <input
              className="Req"
              name="name"
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="itemReq">
            <p className="Req">Phone Number</p>
            <input
              className="Req"
              name="name"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
          <div className="itemReq">
            <p className="Req"> Your Comment Here</p>

            <textarea className="Req" rows={3} defaultValue={""} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default contactUs;
