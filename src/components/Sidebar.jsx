import * as React from 'react';
import '../assets/css/index.css'
import Buttons from './core/Button.jsx'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const token = sessionStorage.getItem('token')
  console.log(token);

  // axios.request({
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   },
  //   method: "GET",
  //   url: `https://devapi.seinoindomobil.co.id:2002/test/user`
  // }).then(response => {
  //   console.log(response.data);
  // });

  const navigate = useNavigate ();
  const clearLocalStorage = () => {
    console.log("aaaa")
    sessionStorage.clear();
    navigate("/")
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className='title' style={{ textAlign:"center", justifyContent:"center" }}>Hello.</div>
      <List>
          <ListItem component={Link} to="/dashboard">
            <ListItemIcon>
            <DashboardIcon sx={{ color:"#4D2DB7" }} />
            </ListItemIcon>
            <div className="listItem">Dashboard</div>
          </ListItem>
          <ListItem component={Link} to="/table">
            <ListItemIcon>
            <DashboardIcon sx={{ color:"#4D2DB7" }} />
            </ListItemIcon>
            <div className="listItem">Table</div>
          </ListItem>
      
      </List>

      <div style={{ position:"absolute", bottom:30, display:"flex",width:"100%", justifyContent:"center" }}>
      <Buttons
            variant="contained"
            label="Sign Out"
            size="small"  
            onClick={clearLocalStorage}
            />
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor:"#191825" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            welcome!
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`}, background:"#4D2DB7" }}
      >
        <Toolbar />
        <div>
        {props.children}
        </div>
      </Box>
    </Box>
      </>    
  );
}

export default ResponsiveDrawer;