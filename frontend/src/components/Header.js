import React, { useState,  useRef } from "react";
// import {useLocation} from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/svg/logo_s.svg";
// import logo_s from "../../assets/svg/airbnb.svg";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useState("Location");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  // const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  // const  locationPath = useLocation().pathname;

  const locations = [
    "All",
    "Pretoria",
    "Sandton",
    "Woodmead",
    "Hyde Park",
    "Port Elizabeth",
  ];

  
  return (
    <>
      <div className='header'>
        <Link to='/'>
         <img
          src={logo}
          alt="logo"
          className="header-logo"
        />  
        </Link>
     
          <div className="header-text">
            <p>Places to stay</p>
            <p>Experiences</p>
            <p>Online Experiences</p>
          </div>
    
          {/* <div className="search-bar-container">
            <div className="search-bar">
              <div className="search-bar-text"> Anywhere</div>
              <div className="search-bar-text">Any week</div>
              <div className="search-bar-text2">Add guests</div>
              <div className="search-icon-div">
                <SearchRoundedIcon className="search-icon" />
              </div>
            </div>
          </div> */}
        <div className="profile-container">
          <div className='become-a-host'>
            <Link to='/signin' className="link">Become a host</Link>
          </div>
          <div className='language-icon'>
            <LanguageIcon className='lang-icon' sx={{ fontSize: "1.3rem" }} />
          </div>
          <div className="profile-div">            
          <div className='dropdown'>
          <MenuRoundedIcon className='dropbtn' />
          <div className='dropdown-content'>
            {/* {!currentUser ? ( */}
              <>
                <span onClick={() => navigate('/signin')} className='link'>Sign In</span>
                <span onClick={() => navigate('/signup')} className='link'>Sign Up</span>
              </>
            {/* // ) : ( */}
              <>
                
                {/* <div className='dropdown-content'> */}
                  {/* Show different options based on user role */}
                  {/* {currentUser.role === 'host' ? ( */}
                    <>
                      <span onClick={() => navigate('/reservations')} className='link'>Reservations</span>
                      <span onClick={() => navigate('/bookings')} className='link'>Bookings</span>
                      <span onClick={() => navigate('/')} className='link'>Sign out</span>
                    </>
                  {/* ) : ( */}
                    <>
                      <span onClick={() => navigate('/reservations')} className='link'>View Reservations</span>
                    </>
                  {/* )} */}
                  <span  className='link'>Sign out</span>
                {/* </div> */}
              </>
            {/* )} */}
          </div>
        </div>
        <span className='acc-name'><AccountCircleIcon/> </span>
        </div>
      </div>
          </div>
        

     
        <div className="header-bottom">
          <div className="header-search">
            <div className="search-where">
              <div>Location</div>
              <div className="search-input">
                <select onChange={(e) => setLocation(e.target.value)} value={location}>
                  <option >Where are you going?</option>
                  {locations.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="border-divider"></div>
            <div className="search-checkin">
              <div>Check In</div>
              <div className="search-button">
                <DatePicker
                  selected={checkInDate}
                  onChange={setCheckInDate}
                  placeholderText="Add dates"
                  className="date-picker"
                />
              </div>
            </div>
            <div className="border-divider"></div>
            <div className="search-checkout">
              <div>Check Out</div>
              <div className="search-button">
                <DatePicker
                  selected={checkOutDate}
                  onChange={setCheckOutDate}
                  placeholderText="Add dates"
                  className="date-picker"
                />
              </div>
            </div>
            <div className="border-divider"></div>
            <div className="search-who">
              <div>Add Guests</div>
              <div
                className="search-button"
                onClick={() => setShowGuestPopup(true)}
              >
                {/* {guestCount > 0 ? `Add guests` : `${guestCount} Guest`} */} Add guests
              </div>
            </div>
            {showGuestPopup && (
              <div className="guest-popup" ref={popupRef}>
                <div className="guest-selector">
                  <button
                    className="guest-button"
                    // onClick={() => handleOnGuestChange("decrement")}
                  >
                    <RemoveIcon />
                  </button>
                  <input
                    type="number"
                    // value={guestCount}
                    readOnly
                    className="guest-input"
                  />
                  <button
                    className="guest-button"
                    // onClick={() => handleOnGuestChange("increment")}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
            )}
            <div className="search">
              <SearchIcon className="search-icon" />
            </div>
          </div>
        </div>
      

     
    </>
  );
};

export default Header;
