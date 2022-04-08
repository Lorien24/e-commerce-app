import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


import './Navbar.css'


const Logo =styled.h1`
font-weight: bold;
`

const MenuItem = styled.div`
font-size: 14px;
margin-left: 25px;
cursor: pointer;
`

const Navbar = () => {
  return (
    <div className="app__navbar-container">
      <div className="app__navbar-wrapper">
        <div className="app__navbar-left">
          <div className="app__navbar-left_language">EN</div>
          <div className="app__navbar-left_search">
            <input type="text" className="app__navbar-input" />
            <SearchIcon style={{color:'gray', fontSize:'16'}}/>
          </div>
        </div>
        <div className="app__navbar-center">
          <Logo>Lorien.</Logo>
        </div>
        <div className="app__navbar-right">
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>          
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </div>
      </div>
    </div>
  );
}

export default Navbar