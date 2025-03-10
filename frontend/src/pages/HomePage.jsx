import React from "react";
import { useState } from "react";
import Profile from "../components/Profile.jsx";
import Posts from "../components/Posts.jsx";
import Message from "../components/Message.jsx";
import "./HomePage.css";
import searchIcon from "../icons/search.svg";
import axios from "axios";

const HomePage = () => {

  return (
    <div className="homePage">
      <Profile />
      <Posts />
      <Message />
    </div>
  );
};

export default HomePage;
