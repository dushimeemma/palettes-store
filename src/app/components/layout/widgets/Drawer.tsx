"use client";

import { useState, KeyboardEvent, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Anchor } from "@/app/utils/types";
import { headerIcons, navItems } from "@/app/utils/data";
import Icon from "@/app/components/reusable/Icon";

export default function SideDrawer() {
  const anchor: Anchor = "right";
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.label} className="mx-6" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {headerIcons.map((icon) => (
          <ListItem key={icon.id} disablePadding>
            <ListItemButton className="flex items-start justify-start">
              <Icon icon={icon} key={icon.id} classNames="mx-6" />
              <span>{icon.label}</span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <button
        className="w-[32px] h-[32px]  flex items-center justify-center"
        onClick={toggleDrawer(anchor, true)}
      >
        <MenuIcon className="cursor-pointer" fontSize="inherit" />
      </button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </>
  );
}
