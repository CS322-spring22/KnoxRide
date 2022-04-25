import './Contact.css';
import logo from '../UserHomePage/logopic.png';

function contactUs() {
  return (
    <div className="AppUser">
      <header className="headerUser">
        <nav className="navbarUser">
            <nav className = 'logopic' >
            <a href="/homepage">
            <img className = 'userContactLogo' src={logo} alt="logo" />
            </a>
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
                    <a href="/contact" className="nav-link">Contact Us</a>
                </li>
                <li className = "nav-item">
                    <a href = '#' className = 'nav-link '>My Account</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Sign Out</a>
                </li>
            </ul>

            </nav>
</header>

<form action="//submit.form" id="ContactUs100" method="post" onsubmit="return ValidateForm(this);">
          <table style={{width: '100%', maxWidth: '1500px', border: 0}} cellSpacing={0} cellPadding={8}>
            <tbody><tr> <td>
                  <label htmlFor="Name">Name*:</label>
                </td> <td>
                  <input name="Name" type="text" maxLength={60} style={{width: '100%', maxWidth: '100px'}} />
                </td> </tr> <tr> <td>
                  <label htmlFor="PhoneNumber">Phone number:</label>
                </td> <td>
                  <input name="PhoneNumber" type="text" maxLength={43} style={{width: '100%', maxWidth: '250px'}} />
                </td> </tr> <tr> <td>
                  <label htmlFor="FromEmailAddress">Email address*:</label>
                </td> <td>
                  <input name="FromEmailAddress" type="text" maxLength={90} style={{width: '100%', maxWidth: '250px'}} />
                </td> </tr> <tr> <td>
                  <label htmlFor="Comments">Comments*:</label>
                </td> <td>
                  <textarea name="Comments" rows={7} cols={40} style={{width: '100%', maxWidth: '350px'}} defaultValue={""} />
                </td> </tr> <tr> <td>
                  * - required fields
                </td> <td>
                  <div style={{float: 'right'}}><a href="#" id="lnk100" title="form to email">form to email</a></div>
                  <input name="skip_Submit" type="submit" defaultValue="Submit" />
                </td> </tr>
            </tbody></table>
        </form>
</div>




);
}


export default contactUs;
