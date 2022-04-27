<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { useForm } from "react-hook-form";
import logo from "../UserHomePage/logopic.png";
import "./Request.css";

function Request() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="Appuserrequest">
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
      {
        //HEADER ENDS HERE , BEGIN PAGE BELOW
      }

      <form className="Req">
        <div className="itemReq">
          <p className="Req">Name</p>
          <div className="name-item">
            <input
              className="Req"
              type="text"
              name="name"
              placeholder="First name"
              {...register("First name", { required: true, maxLength: 20 })}
            />
            <input
              className="Req"
              type="text"
              name="name"
              placeholder="Last name"
              {...register("Last name", { required: true, maxLength: 20 })}
            />
          </div>
        </div>

        <div className="itemReq">
          <p className="Req">Email</p>
          <input
            className="Req"
            name="name"
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>

        <div className="itemReq">
          <p className="Req">Phone Number</p>
          <input
            className="Req"
            name="name"
            type="tel"
            placeholder="Phone Number"
            {...register("Phone Number", { required: true, maxLength: 10 })}
          />
        </div>

        <div className="itemReq">
          <p className="Req">Number of Passengers</p>

          <input
            className="Req"
            type="number"
            placeholder="Number of Passengers"
            {...register("Number of Passengers", {
              required: true,
              max: 99,
              min: 0,
              maxLength: 2,
            })}
          />
        </div>
        {
          //    Other radio stuff here, for now is on bottom of page
        }
        <div className="questionReq">
          <p className="Req">Vehicle</p>
          <div className="question-answerReq">
            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="Compact"
                id="radio_1"
                name="vehicle"
              />
              <label htmlFor="radio_1" className="radio">
                <span>Compact</span>
              </label>
            </div>

            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="SUV"
                id="radio_2"
                name="vehicle"
              />
              <label htmlFor="radio_2" className="radio">
                <span>SUV</span>
              </label>
            </div>
            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="Van"
                id="radio_3"
                name="vehicle"
              />
              <label htmlFor="radio_3" className="radio">
                <span>Van</span>
              </label>
            </div>
            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="Pickup"
                id="radio_4"
                name="vehicle"
              />
              <label htmlFor="radio_4" className="radio">
                <span>Pickup</span>
              </label>
            </div>
            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="other:"
                id="radio_5"
                name="vehicle"
              />
              <label htmlFor="radio_5" className="radio other">
                <span>other:</span>
              </label>
            </div>
          </div>
        </div>

        <div className="itemReq">
          <p className="Req"> Pick Up Date</p>
          <input
            className="Req"
            type="date"
            name="bdate"
            {...register("Pick Up Date", { required: true })}
          />
          <i className="fas fa-calendar-alt" />
        </div>

        <div className="itemReq">
          <p className="Req">Pick Up Time &nbsp; &nbsp;hh:mm: AM/PM-</p>
          <input
            className="Req"
            type="time"
            name="name"
            {...register("Pick Up Time", { required: true })}
          />
          <i className="fas fa-clock" />
        </div>

        <div className="itemReq">
          <p className="Req"> Pick Up Point</p>
          <input
            className="Req"
            type="text"
            name="name"
            placeholder="Street address"
            {...register("street 1", { required: true })}
          />
          <input
            className="Req"
            type="text"
            name="name"
            placeholder="Street address line 2"
            {...register("street 2", { required: true })}
          />
          <div className="city-item">
            <input
              className="Req"
              type="text"
              name="name"
              placeholder="City"
              {...register("City", { required: true })}
            />

            <select className="Req">
              <option value>Country</option>
              <option value={1}>Russia</option>
              <option value={2}>Germany</option>
              <option value={3}>France</option>
              <option value={4}>Armenia</option>
              <option value={5}>USA</option>
            </select>
          </div>
        </div>

        <div className="itemReq">
          <p className="Req">Destination</p>
          <input
            className="Req"
            type="text"
            name="name"
            placeholder="Street address"
            {...register("street 1 Destination", { required: true })}
          />
          <input
            className="Req"
            type="text"
            name="name"
            placeholder="Street address line 2"
            {...register("street 2 Destination", { required: true })}
          />
          <div className="city-item">
            <input
              className="Req"
              type="text"
              name="name"
              placeholder="City"
              {...register("City Destination", { required: true })}
            />

            <select className="Req">
              <option value>Country</option>
              <option value={1}>Russia</option>
              <option value={2}>Germany</option>
              <option value={3}>France</option>
              <option value={4}>Armenia</option>
              <option value={5}>USA</option>
            </select>
          </div>
        </div>

        <div className="itemReq">
          <p className="Req"> Notes</p>

          <textarea className="Req" rows={3} defaultValue={""} />
        </div>

        <div className="btn-block">
          <a href="/homepage" className="submit">
            SUBMIT
          </a>
        </div>
      </form>
    </div>
  );
}

export default Request;

/*import "./Request.css";
import logo from "../UserHomePage/logopic.png";

function Request() {
  return (
    <div className="testbox">
      <form className="Req" onSubmit={handleSubmit(onSubmit)}>
        <div className="bannerReq">
          <h1 className="Req">Car Booking Form</h1>
        </div>
        <div className="item">
          <p>Name</p>
          <div className="name-item">
            <input type="text" name="name" placeholder="First" />
            <input type="text" name="name" placeholder="Last" />
          </div>
        </div>
        <div className="item">
          <p>Email</p>
          <input type="text" name="name" />
        </div>
        <div className="item">
          <p>Phone</p>
          <input type="text" name="name" />
        </div>
        <div className="item">
          <p>Number of Passengers</p>
          <input type="text" name="name" />
        </div>


        <div className="question">
          <p>Vehicle</p>
          <div className="question-answer">
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_1"
                name="vehicle"
              />
              <label htmlFor="radio_1" className="radio">
                <span>Compact</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_2"
                name="vehicle"
              />
              <label htmlFor="radio_2" className="radio">
                <span>SUV</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_3"
                name="vehicle"
              />
              <label htmlFor="radio_3" className="radio">
                <span>Van</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_4"
                name="vehicle"
              />
              <label htmlFor="radio_4" className="radio">
                <span>Pickup</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_5"
                name="vehicle"
              />
              <label htmlFor="radio_5" className="radio other">
                <span>other:</span>
              </label>
              <input className="other" type="text" name="name" />
            </div>
          </div>
        </div>


        <div className="item">
          <p>Pick Up Date</p>
          <input type="date" name="bdate" />
          <i className="fas fa-calendar-alt" />
        </div>
        <div className="item">
          <p>Pick Up Time &nbsp; &nbsp;hh:mm: AM/PM-</p>
          <input type="time" name="name" />
          <i className="fas fa-clock" />
        </div>
        <div className="item">
          <p>Pick Up Point</p>
          <input type="text" name="name" placeholder="Street address" />
          <input type="text" name="name" placeholder="Street address line 2" />
          <div className="city-item">
            <input type="text" name="name" placeholder="City" />
            <select>
              <option value>Country</option>
              <option value={1}>Russia</option>
              <option value={2}>Germany</option>
              <option value={3}>France</option>
              <option value={4}>Armenia</option>
              <option value={5}>USA</option>
            </select>
          </div>
        </div>
        <div className="item">
          <p>Destination</p>
          <input type="text" name="name" placeholder="Street address" />
          <input type="text" name="name" placeholder="Street address line 2" />
          <div className="city-item">
            <input type="text" name="name" placeholder="City" />
            <input type="text" name="name" placeholder="Region" />
            <input type="text" name="name" placeholder="Postal / Zip code" />
            <select>
              <option value>Country</option>
              <option value={1}>Russia</option>
              <option value={2}>Germany</option>
              <option value={3}>France</option>
              <option value={4}>Armenia</option>
              <option value={5}>USA</option>
            </select>
          </div>
        </div>
        <div className="item">
          <p>Notes</p>
          <textarea rows={3} defaultValue={""} />
        </div>
        <div className="btn-block">
          <a href="/homepage" className="submit">
            SUBMIT
          </a>
        </div>
      </formR>
    </div>
  );
}*/

//    THE RADIO STUFF IS HERE
/*
        <div className="question">
          <p>Vehicle</p>
          <div className="question-answer">
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_1"
                name="vehicle"
              />
              <label htmlFor="radio_1" className="radio">
                <span>Compact</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_2"
                name="vehicle"
              />
              <label htmlFor="radio_2" className="radio">
                <span>SUV</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_3"
                name="vehicle"
              />
              <label htmlFor="radio_3" className="radio">
                <span>Van</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_4"
                name="vehicle"
              />
              <label htmlFor="radio_4" className="radio">
                <span>Pickup</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                defaultValue="none"
                id="radio_5"
                name="vehicle"
              />
              <label htmlFor="radio_5" className="radio other">
                <span>other:</span>
              </label>
              <input className="other" type="text" name="name" />
            </div>
          </div>
        </div>
          */
=======
=======
>>>>>>> fe3fa22b3b9c85e656e7b280429b3e8be108e2db
import './Request.css';
function Request(){
    return(
      <div className="testbox">
  <formReq className= 'Req' action="http://localhost:3000/request">
    <div className="bannerReq">
      <h1 className='Req'>Car Booking Form</h1>
    </div>
    <div className="item">
      <p>Name</p>
      <div className="name-item">
        <input type="text" name="name" placeholder="First" />
        <input type="text" name="name" placeholder="Last" />
      </div>
    </div>
    <div className="item">
      <p>Email</p>
      <input type="text" name="name" />
    </div>
    <div className="item">
      <p>Phone</p>
      <input type="text" name="name" />
    </div>
    <div className="item">
      <p>Number of Passengers</p>
      <input type="text" name="name" />
    </div>
    <div className="question">
      <p>Vehicle</p>
      <div className="question-answer">
        <div>
          <input type="radio" defaultValue="none" id="radio_1" name="vehicle" />
          <label htmlFor="radio_1" className="radio"><span>Compact</span></label>
        </div>
        <div>
          <input type="radio" defaultValue="none" id="radio_2" name="vehicle" />
          <label htmlFor="radio_2" className="radio"><span>SUV</span></label>
        </div>
        <div>
          <input type="radio" defaultValue="none" id="radio_3" name="vehicle" />
          <label htmlFor="radio_3" className="radio"><span>Van</span></label>
        </div>
        <div>
          <input type="radio" defaultValue="none" id="radio_4" name="vehicle" />
          <label htmlFor="radio_4" className="radio"><span>Pickup</span></label>
        </div>
        <div>
          <input type="radio" defaultValue="none" id="radio_5" name="vehicle" />
          <label htmlFor="radio_5" className="radio other"><span>other:</span></label>
          <input className="other" type="text" name="name" />
        </div>
      </div>
    </div>
    <div className="item">
      <p>Pick Up Date</p>
      <input type="date" name="bdate" />
      <i className="fas fa-calendar-alt" />
    </div>
    <div className="item">
      <p>Pick Up Time</p>
      <input type="time" name="name" />
      <i className="fas fa-clock" />
    </div>
    <div className="item">
      <p>Pick Up Point</p>
      <input type="text" name="name" placeholder="Street address" />
      <input type="text" name="name" placeholder="Street address line 2" />
      <div className="city-item">
        <input type="text" name="name" placeholder="City" />
              <select>
          <option value>Country</option>
          <option value={1}>Russia</option>
          <option value={2}>Germany</option>
          <option value={3}>France</option>
          <option value={4}>Armenia</option>
          <option value={5}>USA</option>
        </select>
      </div>
    </div>
    <div className="item">
      <p>Destination</p>
      <input type="text" name="name" placeholder="Street address" />
      <input type="text" name="name" placeholder="Street address line 2" />
      <div className="city-item">
        <input type="text" name="name" placeholder="City" />
        <input type="text" name="name" placeholder="Region" />
        <input type="text" name="name" placeholder="Postal / Zip code" />
        <select>
          <option value>Country</option>
          <option value={1}>Russia</option>
          <option value={2}>Germany</option>
          <option value={3}>France</option>
          <option value={4}>Armenia</option>
          <option value={5}>USA</option>
        </select>
      </div>
    </div>
    <div className="item">
      <p>Notes</p>
      <textarea rows={3} defaultValue={""} />
    </div>
    <div className="btn-block">
      <a href="/homepage" className="submit">SUBMIT</a>
    </div>
  </formReq>
</div>
      
);

}
export default Request;
<<<<<<< HEAD
>>>>>>> fe3fa22b3b9c85e656e7b280429b3e8be108e2db
=======
>>>>>>> fe3fa22b3b9c85e656e7b280429b3e8be108e2db
