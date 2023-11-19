import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from 'next/router';

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

  const router = useRouter();

  const handleListItemClick = (id: number) => {
    router.push(`/memory?id=${id}`);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key={'001'} disablePadding>
          <ListItemButton onClick={() => router.push('/new_memory')}>
            <ListItemIcon>
            <MailIcon />
            </ListItemIcon>
            <ListItemText primary={'Add new memory'} />
          </ListItemButton>
        </ListItem>
        <Divider />
      {memories.map((memory) => {
          let memoryTitle = memory.title;
          return (
            <ListItem key={memory.id} disablePadding>
            <ListItemButton onClick={() => handleListItemClick(memory.id)}>
              <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary={memoryTitle.substring(0, 20)} />
            </ListItemButton>
          </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
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
  );
}
