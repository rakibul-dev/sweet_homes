import {
  Divider,
  Stack,
  Typography,
  Grid,
  Container,
  Box,
  Button,
  TextField,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box sx={{ marginTop: "150px", paddingBottom: "20px" }}>
      <Divider />
      <Container>
        <Box sx={{ paddingTop: "25px" }}>
          <Grid container justifyContent="space-between" spacing={4}>
            <Grid item xs={12} md={5}>
              <Box>
                <Typography variant="h4" fontSize="28px" fontWeight="bold">
                  Subscribe For Newsletter
                </Typography>
                <Stack direction="row" gap={2} justifyContent="space-between">
                  <TextField
                    variant="outlined"
                    label="Newsletter"
                    size="small"
                    fullWidth
                  />
                  <Button variant="contained">Subscribe</Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box>
                <Typography variant="h5">Follow us</Typography>
                <Stack width="100%" direction="row" justifyContent="start">
                  <FacebookIcon sx={{ color: "primary.main" }} />
                  <LinkedInIcon sx={{ color: "primary.main" }} />
                  <TwitterIcon sx={{ color: "primary.main" }} />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <Typography variant="h5">Contact us</Typography>
                <Stack>
                  <Typography>sweethome@gmail.com</Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box>
                <Typography variant="h5">Quick links</Typography>
                <Stack gap={1} alignItems="start">
                  <Typography variant="h6" fontSize={16}>
                    Home
                  </Typography>
                  <Typography variant="h6" fontSize={16}>
                    About
                  </Typography>
                  <Typography variant="h6" fontSize={16}>
                    Services
                  </Typography>
                  <Typography variant="h6" fontSize={16}>
                    Blog
                  </Typography>
                  <Typography variant="h6" fontSize={16}>
                    Pricing
                  </Typography>
                  <Typography variant="h6" fontSize={16}>
                    Contact
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
