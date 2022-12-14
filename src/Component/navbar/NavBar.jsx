import React from "react";
import "./navbar.css";
import Mlogo from "../../Assets/Marvel_Logo.svg";
import Ulogo from '../../Assets/icon-mu-shield.png'
import { CiDollar } from "react-icons/ci";

const NavBar = () => {
  return (
    <>
      <nav className='nav_container'>
        <div className='first_section'>
          <div className='blank'></div>
          <div className='signIN'>
            <h2>
              <CiDollar />
            </h2>
            <p>SIGN IN</p>
            <div></div>
            <p>JOIN</p>
          </div>
          <div className='logo'>
            <div className='img'>
              <img src={Mlogo} alt='' />
            </div>
          </div>
          <div className='unlimited'>
            <div className='imgU'>
              <img src={Ulogo} alt='' />
            </div>
            <div className='Sub_content'>
              <p>MARVEL UNLIMITED</p>
              <p>SUBSSCRIBE</p>
            </div>
          </div>
          <div className='blank2'></div>
              </div>
              <div className="second_section">
                  <a href="#">NEWS</a>
                  <a href="#">COMICS</a>
                  <a href="#">CHARACTERS</a>
                  <a href="#">MOVIES</a>
                  <a href="#">TV SHOWS</a>
                  <a href="#">GAMES</a>
                  <a href="#">VIDEOS</a>
                  <a href="#">MORE</a>
              </div>
      </nav>
    </>
  );
};

export default NavBar;
