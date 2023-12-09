import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import styled from "@emotion/styled";
import { storage } from "../../utilities/storage";
import { useNavigate } from "react-router-dom";
// import { DrawerContext } from "../../Store/drawer-context";

const CustomizedBar = styled(AppBar)`
  background-color: #434380;
`;
export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  //   const ctx = React.useContext(DrawerContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    storage.clearToken();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomizedBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome {storage.getToken()}
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </CustomizedBar>
    </Box>
  );
}
