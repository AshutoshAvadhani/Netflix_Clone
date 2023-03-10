import React, { useState } from 'react'
import "./Navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Netflix_logo from "../component_images/Netflix_logo.png"
import shaktiman from "../component_images/shaktiman.jpg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {

    const[isScrolled,setIsScrolled] = useState(false); 

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false: true);
        return() => (window.onscroll = null);
    };

  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
        <div className='container'>
        <div className='left'>
            <img src={Netflix_logo} alt=""></img>
            <span>HomePage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
        </div>
        <div className='right'>
            <SearchIcon className='icon'></SearchIcon>
            <span>KID</span>
            <NotificationsIcon className='icon'></NotificationsIcon>
            <img src={shaktiman} alt=""></img>
            <div className='profile'>
                <ArrowDropDownIcon className='icon'></ArrowDropDownIcon>
                <div className='options'>
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar