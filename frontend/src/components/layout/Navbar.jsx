import { React, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../icons/home.svg";
import Logout from "../../icons/logout.svg";
import Notification from "../../icons/notification.svg";
import Profile from "../../icons/profile.png";
import searchIcon from "../../icons/search.svg";
import "./Navbar.css";

const Navbar = () => {
  const [searchVal, setSearchVal] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5501/portfolio/get-stock/${searchVal}`
      );

      console.log("Price: " + res.data.price);
    } catch (error) {
      console.error("Error finding stock: ", error);
      alert(error.response.data.error);
    }
  };
  return (
    <div className="navbar">
      <div className="navbar-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchVal("");
            handleSubmit();
          }}
        >
          <div className="searchBar">
            <label htmlFor="search" className="icon-search">
              <img src={searchIcon} alt="Search" />
            </label>
            <input
              id="search"
              name="search"
              value={searchVal}
              placeholder="Search"
              className="bar"
              onChange={(e) => {
                setSearchVal(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
      <div className="navbar-icons">
        <Link to="/home">
          <div className="navbar-item">
            <img src={Home} className="navbar-icon" />
            <h1 className="navbar-text">Home</h1>
          </div>
        </Link>

        <Link to="/notifications">
          <div className="navbar-item">
            <img src={Notification} className="navbar-icon" />
            <h1 className="navbar-text">Notifications</h1>
          </div>
        </Link>

        <Link to="/profile">
          <div className="navbar-item">
            <img src={Profile} className="navbar-icon" />
            <h1 className="navbar-text">Profile</h1>
          </div>
        </Link>

        <Link to="/login">
          <div className="navbar-item">
            <img src={Logout} className="navbar-icon" />
            <h1 className="navbar-text">Logout</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
