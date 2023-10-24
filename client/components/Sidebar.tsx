import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function SideBar(props: any) {
  const [memories, setMemories] = useState([] as any[]);

  useEffect(() => {
    if (!memories.length) {
      try {
        fetch('http://localhost:3001/memories/list', {
          method: 'GET',
        }).then(async (response: any) => {
          const memories = await response.json();
          setMemories(memories);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [memories]);

  const drawerWidth = 240;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key={'001'} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <MailIcon />
            </ListItemIcon>
            <ListItemText primary={'Add new memory'} />
          </ListItemButton>
        </ListItem>
        <Divider />
      {memories.map((memory) => {
          let parsedDescription = JSON.parse(memory.description);
          if (!parsedDescription.blocks) {
            parsedDescription = JSON.parse(parsedDescription);
          }
          return (
            <ListItem key={memory.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary={parsedDescription.blocks[0].text.substring(0, 20)} />
            </ListItemButton>
          </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
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
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
    </Box>
  </Box>
  );
}
