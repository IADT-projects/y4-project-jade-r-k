import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Home, Apps, Feed, Close } from '@mui/icons-material';
import LinkIcon from '@mui/icons-material/Link';

const InteractiveNav = () => {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

      const theme = useTheme();

      const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      }));

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" open={open}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="f1" variant="h4" component="div" sx={{ flexGrow: 1 }}>
            INTERACTIVE
          </Typography>
          <Button className="f2" component={Link} to='/static/' color="inherit" variant="outlined">Static</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <Close/>
          </IconButton>
          <Typography className="f1" variant="h4" component="div" sx={{ flexGrow: 1 }}>
            INTERACTIVE
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem>
                <ListItemButton component={Link} to='/interactive/'>
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText>
                    <Typography className="f2">
            HOME
          </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component={Link} to='/interactive/gallery'>
                    <ListItemIcon><Apps/></ListItemIcon>
                    <ListItemText>
                    <Typography className="f2">
            GALLERY
          </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton component={Link} to='/interactive/form'>
                    <ListItemIcon><Feed/></ListItemIcon>
                    <ListItemText>
                    <Typography className="f2">
            CONTACT FORM
          </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem>
                <ListItemButton component={Link} to='/static/'>
                    <ListItemIcon><LinkIcon/></ListItemIcon>
                    <ListItemText>
                    <Typography className="f2">
            STATIC
          </Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    </Box>
        </>
    );
};

export default InteractiveNav;