import {
  Box,
  Typography,
  TextField,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import OpenInNew from "@mui/icons-material/OpenInNew";
import SearchIcon from "@mui/icons-material/Search";
const HeroBanner = () => {
  return (
    <div>
      <Box
        sx={{
          height: "100dvh",
          width: "100%",
          backgroundImage: "url(/images/homepage_banner_bg.jpg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   flexDirection: "column",
        }}
      >
        <Box width="100%" sx={{ position: "relative" }}>
          <Container>
            <Typography
              variant="h4"
              sx={{
                // position: "relative",
                // top: "opx",
                fontWeight: "600",
                fontSize: { md: "60px", sm: "34px" },
              }}
              align="center"
              color="white"
            >
              Search Your Next
              <br /> Home
            </Typography>
            <Paper>
              <Grid container>
                <Grid item xs={6} md={3}>
                  <Box sx={{ padding: "10px" }}>
                    <Stack gap={1}>
                      <Typography variant="h6" fontWeight="400" fontSize="14px">
                        City/Street
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        label="City/Street"
                        variant="outlined"
                        size="small"
                      />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box sx={{ padding: "10px" }}>
                    <Stack gap={1}>
                      <Typography variant="h6" fontWeight="400" fontSize="14px">
                        Property Type
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        label="Property Type"
                        variant="outlined"
                        size="small"
                      />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box sx={{ padding: "10px" }}>
                    <Stack gap={1}>
                      <Typography variant="h6" fontWeight="400" fontSize="14px">
                        Price Range
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        label="Price Range"
                        variant="outlined"
                        size="small"
                      />
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box
                    sx={{ padding: "10px" }}
                    display="flex"
                    alignItems="center"
                    // justifyContent="flex-end"
                    height="100%"
                  >
                    <Stack
                      gap={1}
                      width="100%"
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        fontSize="16px"
                      >
                        Advance
                        <br /> Filter
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: "primary.main",
                          height: "40px",
                          width: "40px",
                          borderRadius: "5px",
                          border: "1px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <SearchIcon sx={{ color: "white" }} />
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default HeroBanner;
