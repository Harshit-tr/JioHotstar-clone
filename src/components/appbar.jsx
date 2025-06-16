import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import VideocamIcon from "@mui/icons-material/Videocam";
import CategoryIcon from "@mui/icons-material/Category";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import logo from "./assests/logo.webp";

export default function Appbar() {
  const [hovered, setHovered] = React.useState(false);

  const items = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Search", icon: <SearchIcon /> },
    { text: "TV", icon: <TvIcon /> },
    { text: "Movies", icon: <RamenDiningIcon /> },
  ];

  const items2 = [
    { text: "Sports", icon: <DirectionsRunIcon /> },
    { text: "Sparks", icon: <VideocamIcon /> },
    { text: "Category", icon: <CategoryIcon /> },
    { text: "My Space", icon: <AccountCircleRoundedIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        width: hovered ? 240 : 60,
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "& .MuiDrawer-paper": {
          width: hovered ? 240 : 60,
          overflowX: "hidden",
          transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          boxSizing: "border-box",
          border: "none",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          color: "white",
        },
      }}
    >
      <Box
        sx={{
          height: 64,
          width: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex",
          paddingLeft: 1,
          paddingTop: 1,

          position: "relative",
          //   borderBottom: "1px solid #333",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: 40, width: "auto", display: "block" }}
        />
      </Box>

      <Box sx={{ mt: 4, px: 1.5, py: 2 }}>
        <List>
          {items.map(({ text, icon }) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: hovered ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: hovered ? 3 : "auto",
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  {icon}
                </ListItemIcon>
                {hovered && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ display: "none" }} />
        <List>
          {items2.map(({ text, icon }) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: hovered ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: hovered ? 3 : "auto",
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  {icon}
                </ListItemIcon>
                {hovered && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
