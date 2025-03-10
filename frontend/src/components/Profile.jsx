import { Link } from "react-router-dom";
import user_pic from "../icons/guest_user.jpg";
import banner_pic from "../icons/default_banner.jpg";
import Home from "../icons/home.svg";
import Notification from "../icons/notification.svg";
import "./Profile.css";

const Profile = () => {
  const name = "Sahil Sheth";
  const banner = banner_pic;
  const user = user_pic;
  const short_bio = "Undergraduate CS Student | Sophomore";
  const school = "UCLA";
  const location = "Houston";
  const connections = 0;

  return (
    <div className="profile">
      <div className="profile-images">
        <img className="banner" src={banner} default="Banner" />
        <img className="profile-pic" src={user} default="Profile Picture" />
      </div>
      <div className="profile-text">
        <h1 className="name">{name}</h1>
        <h2 className="bio">{short_bio}</h2>
        <h3 className="school">
          <span>{location}</span> <span>➔</span> <span>{school}</span>
        </h3>
        <h3 className="connections">{connections} connections</h3>
      </div>
      <div className="horizontal-line"></div>
      <div className="profile-icons">
        <Link to="/home">
          <div className="profile-item">
            <img src={Home} className="profile-icon" />
            <span className="profile-text">Home</span>
          </div>
        </Link>

        <Link to="/notifications">
          <div className="profile-item">
            <img src={Notification} className="profile-icon" />
            <h1 className="profile-text">Notifications</h1>
          </div>
        </Link>
      </div>
      <div className="horizontal-line"></div>
      <Link to="/profile">
        <div className="visit-profile-wrapper">
          <h1 className="visit-profile-text">Visit your Profile</h1>
        </div>
      </Link>
    </div>
  );
};

export default Profile;
