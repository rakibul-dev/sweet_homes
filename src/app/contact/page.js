import {
  Box,
  Grid,
  Stack,
  Paper,
  Typography,
  Button,
  Container,
  TextField,
} from "@mui/material";

const page = () => {
  return (
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
                Conact
              </Typography>
              <Typography variant="h4" color="white">
                Get Helps & Friendly Support
              </Typography>
            </Container>
          </Box>
        </Box>
      </Box>
      <Container>
        <Grid container spacing={4} width="100%">
          <Grid item md={4}>
            <img
              src="/images/contact.png"
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
          <Grid item md={8}>
            <Box>
              <Paper>
                <Box padding="25px">
                  <Grid
                    container
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item xs={12} md={6}>
                      <TextField
                        variant="outlined"
                        label="your name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        variant="outlined"
                        label="your email"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField variant="outlined" label="Subject" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <TextField
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Button sx={{ marginTop: "25px" }} variant="contained">
                    Submit
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default page;
