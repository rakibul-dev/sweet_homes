import React from "react";
import { Box, Grid, Paper, Stack, Container, Typography } from "@mui/material";
const FeaturedProperty = () => {
  return (
    <Box>
      <Container>
        <Stack gap={4} width="100%">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              fontSize="35px"
              fontWeight={600}
            >
              Featured Property Types
            </Typography>
            <Typography variant="h6" align="center" fontSize="16px">
              Find All Type of Property.
            </Typography>
          </Box>
          <Box>
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item md={2}>
                <Paper>
                  <Box sx={{ padding: "25px" }}>
                    <Stack gap={2} justifyContent="center" alignItems="center">
                      <img
                        src="images/family-house.svg"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <Box>
                        <Typography
                          variant="h5"
                          align="center"
                          fontSize="16px"
                          fontWeight="bold"
                        >
                          Family House
                        </Typography>
                        <Typography variant="h6" align="center" fontSize="14px">
                          122 Property
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={2}>
                <Paper>
                  <Box sx={{ padding: "25px" }}>
                    <Stack gap={2} justifyContent="center" alignItems="center">
                      <img
                        src="images/house.svg"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <Box>
                        <Typography
                          variant="h5"
                          align="center"
                          fontSize="16px"
                          fontWeight="bold"
                        >
                          House & Villa
                        </Typography>
                        <Typography variant="h6" align="center" fontSize="14px">
                          155 Property
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={2}>
                <Paper>
                  <Box sx={{ padding: "25px" }}>
                    <Stack gap={2} justifyContent="center" alignItems="center">
                      <img
                        src="images/appartment.svg"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <Box>
                        <Typography
                          variant="h5"
                          align="center"
                          fontSize="16px"
                          fontWeight="bold"
                        >
                          Apartment
                        </Typography>
                        <Typography variant="h6" align="center" fontSize="14px">
                          90 Property
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>

              <Grid item md={2}>
                <Paper>
                  <Box sx={{ padding: "25px" }}>
                    <Stack gap={2} justifyContent="center" alignItems="center">
                      <img
                        src="images/office.svg"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <Box>
                        <Typography
                          variant="h5"
                          align="center"
                          fontSize="16px"
                          fontWeight="bold"
                        >
                          Office Studio
                        </Typography>
                        <Typography variant="h6" align="center" fontSize="14px">
                          70 Property
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={2}>
                <Paper>
                  <Box sx={{ padding: "25px" }}>
                    <Stack gap={2} justifyContent="center" alignItems="center">
                      <img
                        src="images/condo.svg"
                        style={{ height: "50px", width: "50px" }}
                      />
                      <Box>
                        <Typography
                          variant="h5"
                          align="center"
                          fontSize="16px"
                          fontWeight="bold"
                        >
                          Villa & Condo
                        </Typography>
                        <Typography variant="h6" align="center" fontSize="14px">
                          70 Property
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FeaturedProperty;
