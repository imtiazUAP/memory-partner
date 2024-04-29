import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShareIcon from "@mui/icons-material/Share";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MyProfile from "./MyProfile";
import Login from "./Login";

export default function SideBar(props: any) {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: RootState) => state.context.isSidebarOpen
  );
  const contextMemories = useSelector(
    (state: RootState) => state.context.memories
  );
  const accessToken = useSelector(
    (state: RootState) => state.context
  );
  const isMobileScreen =
    typeof window !== "undefined" && window.innerWidth < 601;
  const router = useRouter();
  const [selectedIcon, setSelectedIcon] = useState("viewMemories");
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3LCJuYW1lIjoibGl0b24ifSwiaWF0IjoxNzA1NDg1OTUzLCJleHAiOjE3MDU1NzIzNTN9.Msw1EX5zkDC3p5lBTJ5aWwA1vY7_YNhOJbTQclPjiRY';

  useEffect(() => {
    console.log('--- access_token in sidebar: ', accessToken);
    if (!contextMemories.length) {
      console.log('making request to memories/list');
      try {
        fetch("http://localhost:3001/memories/list", {
          method: "GET",
          // headers: {
          //   Authorization: `Bearer ${accessToken}`,
          //   "Content-Type": "application/json",
          // },
        }).then(async (response: any) => {
          const memories = await response.json();
          dispatch({ type: "UPDATE_MEMORIES", payload: memories });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [contextMemories]);

  const icons = [
    { iconName: "HomeIcon", action: "HomeIcon", toolTip: "Home", key: 1 },
    { iconName: "AddIcon", action: "addMemory", toolTip: "Add new", key: 2 },
    {
      iconName: "EditNoteIcon",
      action: "viewMemories",
      toolTip: "Show memories",
      key: 3,
    },
    { iconName: "LoginIcon", action: "showLogin", toolTip: "Logout", key: 4 },
    {
      iconName: "AccountBoxIcon",
      action: "showProfile",
      toolTip: "My profile",
      key: 5,
    },
    { iconName: "ShareIcon", action: "shareMemory", toolTip: "Share", key: 6 },
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "HomeIcon":
        return <HomeIcon />;
      case "AccountBoxIcon":
        return <AccountBoxIcon />;
      case "AddIcon":
        return <AddIcon />;
      case "EditNoteIcon":
        return <EditNoteIcon />;
      case "LoginIcon":
        return <LoginIcon />;
      case "ShareIcon":
        return <ShareIcon />;
      default:
        return null;
    }
  };

  const handleListItemClick = () => {
    if (isMobileScreen) {
      dispatch({ type: "TOGGLE_SIDEBAR" });
    }
  };

  const handleIconClick = (icon: string) => {
    console.log("clicked icon: ", icon);
    setSelectedIcon(icon);

    if (icon === "HomeIcon") {
      router.push("/");
      handleListItemClick();
    }
  };

  const drawer = (
    <div className={isSidebarOpen ? "sidebar-open" : "sidebar-closed"}>
      {/* <Sidebar header -start /> */}
      <div className="sidebar-header">
        <div className="mobile-sidebar-header">
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
          >
            <MenuOpenIcon />
          </IconButton>
        </div>
        <div className="large-sidebar-header">
          <Typography variant="h6" noWrap component="div">
            <FormatListBulletedIcon />
          </Typography>
        </div>
      </div>
      {/* <Sidebar header -end /> */}
      {/* Vertical Menu Bar -start */}
      <div className="sidebar-drawer">
        <div className="sidebar-icons-tray">
          <List>
            {icons.map((icon) => (
              <div key={icon.key}>
                <ListItem disablePadding key={icon.action}>
                  <ListItemButton onClick={() => handleIconClick(icon.action)}>
                    <Tooltip title={icon.toolTip} arrow>
                      <ListItemIcon>
                        {getIconComponent(icon.iconName)}
                      </ListItemIcon>
                    </Tooltip>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
        {/* Vertical Menu Bar -end */}

        {/* Sidebar content -start */}
        <div className="sidebar-content">
          <List>
            {selectedIcon === "addMemory" && (
              <>
                <ListItem key={"001"} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      handleListItemClick();
                      router.push("/new_memory");
                    }}
                  >
                    <ListItemIcon>
                      <NoteAddIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Add new memory"} />
                  </ListItemButton>
                </ListItem>
                <ListItem key={"002"} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      handleListItemClick();
                      router.push("/new_memory");
                    }}
                  >
                    <ListItemIcon>
                      <EditCalendarIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Add new event"} />
                  </ListItemButton>
                </ListItem>
                <ListItem key={"003"} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      handleListItemClick();
                      router.push("/new_memory");
                    }}
                  >
                    <ListItemIcon>
                      <EnhancedEncryptionIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Add new credential"} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {(contextMemories && (selectedIcon === "viewMemories" || selectedIcon === "HomeIcon")) &&
              contextMemories.map((memory: any) => (
                <div key={memory.id}>
                  <ListItem key={memory.id} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        handleListItemClick();
                        router.push(`/memory?id=${memory.id}`);
                      }}
                    >
                      <ListItemIcon style={{ marginRight: "-12px" }}>
                        <EditNoteIcon />
                      </ListItemIcon>
                      <div
                        style={{
                          marginLeft: "-12px",
                        }}
                      >
                        <Typography variant="body2">{memory.title}</Typography>
                      </div>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </div>
              ))}
            {selectedIcon === "showProfile" && <MyProfile />}
            {selectedIcon === "showLogin" && <Login />}
          </List>
        </div>
      </div>
    </div>
  );

  const drawerWidth = isMobileScreen ? "80%" : "20%";
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* for mobile device */}
      <Drawer
        variant="temporary"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open={isSidebarOpen}
        onClose={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      {/* for larger screen */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
