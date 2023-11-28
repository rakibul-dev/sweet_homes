import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EmojiEventsSharpIcon from "@mui/icons-material/EmojiEventsSharp";
import MilitaryTechSharpIcon from "@mui/icons-material/MilitaryTechSharp";
const OfferPackages = () => {
  return (
    <Box>
      <Container>
        <Stack gap={10} alignItems="center">
          <Box
            sx={{
              width: "70%",
            }}
          >
            <Typography variant="h4" align="center" fontWeight={600}>
              Select Your Package
            </Typography>
            <Typography variant="h6" align="center" fontSize="16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </Box>
          <Box width="100%">
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={4}>
                <Paper>
                  <Stack
                    padding="50px"
                    justifyContent="center"
                    alignItems="center"
                    gap={4}
                  >
                    <Box width="100%">
                      <Typography variant="h4" align="center" fontWeight="bold">
                        Basic
                      </Typography>
                      <Typography
                        variant="h4"
                        align="center"
                        fontWeight="bold"
                        fontSize="60px"
                      >
                        $29
                      </Typography>
                      <Typography variant="h6" align="center" fontWeight="bold">
                        per user, per month
                      </Typography>
                    </Box>
                    <Box>
                      <Stack gap={1}>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            99.5% Uptime Guarantee
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            120GB CDN Bandwidth
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            5GB Cloud Storage
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            Personal Help Support
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6"> Enterprise SLA</Typography>
                        </Stack>
                        <Button variant="contained" size="mediume">
                          Start basic
                        </Button>
                      </Stack>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper>
                  <Stack
                    padding="50px"
                    justifyContent="center"
                    alignItems="center"
                    gap={4}
                  >
                    <MilitaryTechSharpIcon
                      sx={{
                        color: "primary.main",
                        height: "100px",
                        width: "100px",
                      }}
                    />
                    <Box width="100%">
                      <Typography variant="h4" align="center" fontWeight="bold">
                        Standard
                      </Typography>
                      <Typography
                        variant="h4"
                        align="center"
                        fontWeight="bold"
                        fontSize="60px"
                      >
                        $49
                      </Typography>
                      <Typography variant="h6" align="center" fontWeight="bold">
                        per user, per month
                      </Typography>
                    </Box>
                    <Box>
                      <Stack gap={1}>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            99.5% Uptime Guarantee
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            120GB CDN Bandwidth
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            5GB Cloud Storage
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            Personal Help Support
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6"> Enterprise SLA</Typography>
                        </Stack>
                        <Button variant="contained" size="mediume">
                          Start standard
                        </Button>
                      </Stack>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper>
                  <Stack
                    padding="50px"
                    justifyContent="center"
                    alignItems="center"
                    gap={4}
                  >
                    <Box width="100%">
                      <Typography variant="h4" align="center" fontWeight="bold">
                        Platinum
                      </Typography>
                      <Typography
                        variant="h4"
                        align="center"
                        fontWeight="bold"
                        fontSize="60px"
                      >
                        $79
                      </Typography>
                      <Typography variant="h6" align="center" fontWeight="bold">
                        per user, per month
                      </Typography>
                    </Box>
                    <Box>
                      <Stack gap={1}>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            99.5% Uptime Guarantee
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            120GB CDN Bandwidth
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            5GB Cloud Storage
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6">
                            Personal Help Support
                          </Typography>
                        </Stack>
                        <Stack direction="row" gap={2} alignItems="center">
                          <CheckCircleRoundedIcon
                            sx={{ color: "success.main" }}
                          />
                          <Typography variant="h6"> Enterprise SLA</Typography>
                        </Stack>
                        <Button variant="contained" size="mediume">
                          Start platinum
                        </Button>
                      </Stack>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default OfferPackages;
