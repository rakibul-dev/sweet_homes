"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Stack,
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const FeaturedAgents = () => {
  return (
    <Box>
      <Container>
        <Stack gap={10} alignItems="center">
          <Box
            sx={{
              width: "70%",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              fontSize="35px"
              fontWeight={600}
            >
              Our Featured Agents
            </Typography>
            <Typography variant="h6" align="center" fontSize="16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </Box>
          <Box width="100%">
            <Grid container justifyContent="space-between" spacing={4}>
              <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                      >
                        <Avatar
                          src="/images/agents/agent1.jpg"
                          sx={{ width: 100, height: 100 }}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            fontSize="14px"
                            align="center"
                          >
                            Montreal, Canada
                          </Typography>
                          <Typography
                            variant="h6"
                            fontSize="16px"
                            fontWeight="bold"
                            align="center"
                          >
                            Harijeet M. Siller
                          </Typography>
                        </Box>
                        <Stack
                          width="100%"
                          direction="row"
                          justifyContent="space-evenly"
                        >
                          <FacebookIcon sx={{ color: "primary.main" }} />
                          <LinkedInIcon sx={{ color: "primary.main" }} />
                          <TwitterIcon sx={{ color: "primary.main" }} />
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                      >
                        <Avatar
                          src="/images/agents/agent2.jpg"
                          sx={{ width: 100, height: 100 }}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            fontSize="14px"
                            align="center"
                          >
                            Montreal, Canada
                          </Typography>
                          <Typography
                            variant="h6"
                            fontSize="16px"
                            fontWeight="bold"
                            align="center"
                          >
                            Harijeet M. Siller
                          </Typography>
                        </Box>
                        <Stack
                          width="100%"
                          direction="row"
                          justifyContent="space-evenly"
                        >
                          <FacebookIcon sx={{ color: "primary.main" }} />
                          <LinkedInIcon sx={{ color: "primary.main" }} />
                          <TwitterIcon sx={{ color: "primary.main" }} />
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                      >
                        <Avatar
                          src="/images/agents/agent3.avif"
                          sx={{ width: 100, height: 100 }}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            fontSize="14px"
                            align="center"
                          >
                            Montreal, Canada
                          </Typography>
                          <Typography
                            variant="h6"
                            fontSize="16px"
                            fontWeight="bold"
                            align="center"
                          >
                            Harijeet M. Siller
                          </Typography>
                        </Box>
                        <Stack
                          width="100%"
                          direction="row"
                          justifyContent="space-evenly"
                        >
                          <FacebookIcon sx={{ color: "primary.main" }} />
                          <LinkedInIcon sx={{ color: "primary.main" }} />
                          <TwitterIcon sx={{ color: "primary.main" }} />
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                      >
                        <Avatar
                          src="/images/agents/agent4.avif"
                          sx={{ width: 100, height: 100 }}
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            fontSize="14px"
                            align="center"
                          >
                            Montreal, Canada
                          </Typography>
                          <Typography
                            variant="h6"
                            fontSize="16px"
                            fontWeight="bold"
                            align="center"
                          >
                            Harijeet M. Siller
                          </Typography>
                        </Box>
                        <Stack
                          width="100%"
                          direction="row"
                          justifyContent="space-evenly"
                        >
                          <FacebookIcon sx={{ color: "primary.main" }} />
                          <LinkedInIcon sx={{ color: "primary.main" }} />
                          <TwitterIcon sx={{ color: "primary.main" }} />
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FeaturedAgents;
