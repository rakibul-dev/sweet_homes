import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
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
                <IconButton size="medium" edge="center">
                  <MenuIcon />
                </IconButton>
              </Box>

              <Typography variant="h6">News</Typography>
            </Box>

            <Box sx={{ display: { sm: "none", md: "block" } }}>
              <Stack direction="row" gap={2} alignItems="center">
                <Typography variant="h6" fontSize={16} fontWeight={600}>
                  Home
                </Typography>
                <Typography variant="h6" fontSize={16} fontWeight={600}>
                  About
                </Typography>
                <Typography variant="h6" fontSize={16} fontWeight={600}>
                  Services
                </Typography>
                <Typography variant="h6" fontSize={16} fontWeight={600}>
                  Blog
                </Typography>
                <Typography variant="h6" fontSize={16} fontWeight={600}>
                  Pricing
                </Typography>
                <Typography variant="h6" fontSize={16} fontWeight={600}>
                  Contact
                </Typography>
              </Stack>
            </Box>

            <Button variant="contained">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
