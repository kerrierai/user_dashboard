"use client";

import * as React from "react";
import Link from "next/link";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import { DrawerHeader } from "@/components/common/DrawerHeader/DrawerHeader";
import { useMediaQuery } from "@mui/material";

interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const navs = [
  {
    title: "Dashboard",
    icon: <DashboardCustomizeOutlinedIcon />,
    path: "/",
  },
  {
    title: "Users",
    icon: <GroupOutlinedIcon />,
    path: "/users",
  },
  {
    title: "Posts",
    icon: <InterestsOutlinedIcon />,
    path: "/posts",
  },
];

export default function Sidebar({ open, handleDrawerClose }: SidebarProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        position: isMobile ? "absolute" : "relative",
        zIndex: isMobile ? 1200 : "auto",
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon color="primary" />
          ) : (
            <ChevronLeftIcon color="primary" />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navs.map((nav) => (
          <ListItem key={nav.title} disablePadding sx={{ display: "block" }}>
            <Link href={nav.path} passHref legacyBehavior>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 2,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {nav.icon}
                </ListItemIcon>
                <ListItemText
                  primary={nav.title}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
