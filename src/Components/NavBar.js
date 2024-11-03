import stu from "./img.png"
import img from "./kl.png"
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    const handleProfileMenuClose = () => {
        setMenuOpen(false);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    };
    

  return (
    
    <div>
    <div className='one'>
<img src={img} alt="img" width="200" height="50"/>
            <h1> Student Portel-ERP</h1>
            <h2><img src={stu} alt="img" width="30" height="30"/>230003XXXX</h2>

    </div>
    <div className='two'>
  

    <h1>KLU ERP</h1>
    <h2><img src={stu} alt="logo" width="30" height="30"/>Logout</h2>
</div>
<>
<List>
<ListItem button component={Link} to="/AttendenceRegister" onClick={handleMenuClose}>
  <ListItemText primary="AttendenceRegister" />
</ListItem>
<ListItem button component={Link} to="/TimeTable" onClick={handleMenuClose}>
  <ListItemText primary="TimeTable" />
</ListItem>
<ListItem button component={Link} to="/FeedBack" onClick={handleMenuClose}>
  <ListItemText primary="FeedBack" />
</ListItem>


          <ListItem button component={Link} to="/Home" onClick={handleMenuClose}>
  <ListItemText primary="Home" />
</ListItem>
<ListItem button component={Link} to="/Profile" onClick={handleMenuClose}>
  <ListItemText primary="Profile" />
</ListItem>
<ListItem button component={Link} to="/Faculty" onClick={handleMenuClose}>
  <ListItemText primary="Faculty" />
</ListItem>


            
           

          </List>
          <Menu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
            >
        <MenuItem onClick={handleProfileMenuClose} color="black">Profile</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
        </Menu>
        </>

        
    </div>
    
  )
}

export default NavBar
