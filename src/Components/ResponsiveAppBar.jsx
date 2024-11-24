import * as React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import TemporaryDrawer from "./Sidebar"; // Import Sidebar component
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon for mobile navbar

const pages = ["Dashboard", "Docs", "Agents", "Tracking", "Payments", "Analytics"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);


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

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);

  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          AmazTrade-Suite

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

        {/* User Avatar */}
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
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
