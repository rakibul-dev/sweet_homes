"use client";

import { useState } from "react";
import {
  IconButton,
  Button,
  Typography,
  Toolbar,
  Stack,
  Box,
  AppBar,
  Drawer,
} from "@mui/material";

import { useRouter } from "next/navigation";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const toggleDrawer = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <Box width="100%">
      <AppBar position="static" width="100%">
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            height="100%"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: { sm: "block", md: "none" }, mr: 2 }}>
                <IconButton
                  size="medium"
                  edge="center"
                  onClick={() => {
                    toggleDrawer();
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Box>
                <Stack direction="row" gap={1} alignItems="center">
                  <img src="/images/sweet_home_logo.svg" alt="" />
                  <Typography variant="h5" color="black">
                    SweetHome
                  </Typography>
                </Stack>
              </Box>
            </Box>

            <Box sx={{ display: { sm: "none", md: "block" } }}>
              <Stack direction="row" gap={2} alignItems="center">
                <Typography
                  variant="h6"
                  fontSize={16}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Home
                </Typography>
                <Typography
                  variant="h6"
                  fontSize={16}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push("/about");
                  }}
                >
                  About
                </Typography>
                <Typography
                  variant="h6"
                  fontSize={16}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push("/services");
                  }}
                >
                  Services
                </Typography>
                {/* <Typography
                  variant="h6"
                  fontSize={16}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push("/blog");
                  }}
                >
                  Blog
                </Typography> */}
                <Typography
                  variant="h6"
                  fontSize={16}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push("/pricing");
                  }}
                >
                  Pricing
                </Typography>
                <Typography
                  variant="h6"
                  fontSize={16}
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    router.push("/contact");
                  }}
                >
                  Contact
                </Typography>
              </Stack>
            </Box>

            <Button variant="contained">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: "60%", height: "100vh" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack gap={2} alignItems="center" justifyContent="center">
            <Typography
              variant="h6"
              fontSize={16}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                toggleDrawer(), router.push("/");
              }}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                toggleDrawer(), router.push("/about");
              }}
            >
              About
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                toggleDrawer(), router.push("/services");
              }}
            >
              Services
            </Typography>
            {/* <Typography
              variant="h6"
              fontSize={16}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                toggleDrawer(), router.push("/blog");
              }}
            >
              Blog
            </Typography> */}
            <Typography
              variant="h6"
              fontSize={16}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                toggleDrawer(), router.push("/pricing");
              }}
            >
              Pricing
            </Typography>
            <Typography
              variant="h6"
              fontSize={16}
              fontWeight={600}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                toggleDrawer(), router.push("/contact");
              }}
            >
              Contact
            </Typography>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
