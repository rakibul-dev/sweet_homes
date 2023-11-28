import { Box, Grid, Stack, Typography, Button, Container } from "@mui/material";

const page = () => {
  return (
    <Box>
      <Stack gap={10}>
        <Box sx={{ height: "200px", width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "200px",
              backgroundImage: "url(/images/homepage_banner_bg.jpg)",
              position: "absolute",
            }}
          >
            <Box
              sx={{
                height: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container>
                <Typography variant="h6" color="white">
                  About Us
                </Typography>{" "}
                <Typography variant="h4" color="white">
                  About Us - Who We Are?
                </Typography>
              </Container>
            </Box>
          </Box>
        </Box>
        <Box>
          <Container>
            <Grid
              container
              spacing={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item md={6}>
                <Stack gap={2} justifyContent="start">
                  <Box>
                    <Typography variant="h4">Our Agency Story</Typography>
                  </Box>
                  <Typography variant="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                  <Typography variant="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                  <Box>
                    <Button variant="contained">More about</Button>
                  </Box>
                </Stack>
              </Grid>
              <Grid item md={6}>
                <img
                  src="/images/family.jpg"
                  style={{ height: "100%", width: "100%" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Stack>
    </Box>
  );
};

export default page;
