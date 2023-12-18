import React, { useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Logo from '../../Images/logo.svg'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link ,NavLink} from "react-router-dom";
import "../../styles/Hstyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import { FormatColorReset } from "@mui/icons-material";
const Header = () => {
  const [mobileOpen, setMoblieOpen] = useState(false);

  const handletragle = () => {
    setMoblieOpen(!mobileOpen);
  };

  //  drawer function

  const drawer = (
    <Box onClick={handletragle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={'70'} width='200'/>
      </Typography>
      <Divider />
      <ul className="Mobile-menu">
        <li>
          <NavLink activeClassName="active"  to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handletragle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
               <img src={Logo} alt="logo" height={'70'} width='250'/>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handletragle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};
export default Header;
