import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import TemporaryDrawer from "./Sidebar"; // Import Sidebar component
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const pages = ["Dashboard", "Docs", "Agents", "Tracking", "Payments", "Analytics"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setMobileMenuOpen(true);

  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileMenuOpen(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const goToLogin = () => {
    setIsLoggedIn(true)
    navigate('/login');
  }

  return (
    <AppBar position="static" sx={{ height: "80px", paddingX: 2 , width: "full"}}>
      <Toolbar disableGutters>
        {/* Sidebar Button */}
        <TemporaryDrawer />

        {/* Logo */}
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, ml: 1, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            fontSize: "1rem",
            mr: 2,
          }}
        >
          LOGO

        </Typography>
                {/* Mobile Menu Icon */}
                <IconButton
          size="large"
          aria-label="menu"
          sx={{ color: "white", display: { xs: "flex", md: "none" } }}
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>


        {/* Centered Navigation */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              component={Link}
              to={page === "Dashboard" ? "/" : `/${page.toLowerCase()}`}
              sx={{
                my: 2,
                mx: 2,
                color: "white",
                display: "block",
                fontSize: "0.875rem",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Menu
            anchorEl={anchorElNav}
            open={mobileMenuOpen}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              top: "80px", // Ensuring the menu appears below the navbar
              left: "0",
              right: "0",
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Button
                  component={Link}
                  to={page === "Dashboard" ? "/" : `/${page.toLowerCase()}`}
                  sx={{ color: "black" }}
                >
                  {page}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        )}

        {/* User Avatar or Login button*/}
        {isLoggedIn ? (
          <Box sx={{ flexGrow: 0, ml: 2 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        ) : (
          <div onClick={goToLogin} className="bg-white rounded-lg">
              <Button  className="bg-white rounded-lg">
                  Login
              </Button>
          </div>
      )}
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
