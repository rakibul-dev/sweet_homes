import {
  Box,
  Grid,
  Stack,
  Paper,
  Typography,
  Button,
  Container,
} from "@mui/material";
import Image from "next/image";
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
                  Services
                </Typography>
                <Typography variant="h4" color="white">
                  Services -All Services
                </Typography>
              </Container>
            </Box>
          </Box>
        </Box>
        <Box>
          <Container>
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
                      <Stack
                        gap={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Image
                          src="images/family-house.svg"
                          width={0}
                          height={0}
                          sizes="100vw"
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
                          <Typography
                            variant="h6"
                            align="center"
                            fontSize="14px"
                          >
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
                      <Stack
                        gap={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Image
                          src="images/house.svg"
                          width={0}
                          height={0}
                          sizes="100vw"
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
                          <Typography
                            variant="h6"
                            align="center"
                            fontSize="14px"
                          >
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
                      <Stack
                        gap={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Image
                          src="images/appartment.svg"
                          width={0}
                          height={0}
                          sizes="100vw"
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
                          <Typography
                            variant="h6"
                            align="center"
                            fontSize="14px"
                          >
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
                      <Stack
                        gap={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Image
                          src="images/office.svg"
                          width={0}
                          height={0}
                          sizes="100vw"
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
                          <Typography
                            variant="h6"
                            align="center"
                            fontSize="14px"
                          >
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
                      <Stack
                        gap={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Image
                          src="images/condo.svg"
                          width={0}
                          height={0}
                          sizes="100vw"
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
                          <Typography
                            variant="h6"
                            align="center"
                            fontSize="14px"
                          >
                            70 Property
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Stack>
    </Box>
  );
};

export default page;
