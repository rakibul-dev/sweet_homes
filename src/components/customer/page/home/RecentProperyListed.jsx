import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  Grid,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

const properies = [
  {
    image: "",
    realestate: "",
    location: "",
    price: "",
    category: "",
  },
];
const RecentProperyListed = () => {
  return (
    <Box>
      <Container>
        <Stack gap={15}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
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
                Recent Property Listed
              </Typography>
              <Typography variant="h6" align="center" fontSize="16px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={6} md={3}>
                <Box>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=900&t=st=1701153552~exp=1701154152~hmac=fb42230ac7236b3b6cebfd1f2b4af146e8f9a9ae640dd7359b7483f365a67ca9"
                      title="green iguana"
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between">
                        <Button size="small">For Rent</Button>
                        <FavoriteIcon sx={{ color: "primary.main" }} />
                      </Stack>
                      <Stack>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="16px"
                        >
                          Red Carpet Real Estate
                        </Typography>
                        <Typography variant="h6" fontSize="16px">
                          210 Zirak Road, Canada
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions>
                      <Stack
                        width="100%"
                        display="flex"
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between
           "
                      >
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="24px"
                          textAlign="start"
                        >
                          $3,700
                        </Typography>
                        <Typography
                          variant="h6"
                          fontSize="16px"
                          textAlign="end"
                        >
                          Homes & Villas
                        </Typography>
                      </Stack>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=900&t=st=1701153552~exp=1701154152~hmac=fb42230ac7236b3b6cebfd1f2b4af146e8f9a9ae640dd7359b7483f365a67ca9"
                      title="green iguana"
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between">
                        <Button size="small">For Rent</Button>
                        <FavoriteIcon sx={{ color: "primary.main" }} />
                      </Stack>
                      <Stack>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="16px"
                        >
                          Red Carpet Real Estate
                        </Typography>
                        <Typography variant="h6" fontSize="16px">
                          210 Zirak Road, Canada
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions>
                      <Stack
                        width="100%"
                        display="flex"
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between
           "
                      >
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="24px"
                          textAlign="start"
                        >
                          $3,700
                        </Typography>
                        <Typography
                          variant="h6"
                          fontSize="16px"
                          textAlign="end"
                        >
                          Homes & Villas
                        </Typography>
                      </Stack>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=900&t=st=1701153552~exp=1701154152~hmac=fb42230ac7236b3b6cebfd1f2b4af146e8f9a9ae640dd7359b7483f365a67ca9"
                      title="green iguana"
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between">
                        <Button size="small">For Rent</Button>
                        <FavoriteIcon sx={{ color: "primary.main" }} />
                      </Stack>
                      <Stack>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="16px"
                        >
                          Red Carpet Real Estate
                        </Typography>
                        <Typography variant="h6" fontSize="16px">
                          210 Zirak Road, Canada
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions>
                      <Stack
                        width="100%"
                        display="flex"
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between
           "
                      >
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="24px"
                          textAlign="start"
                        >
                          $3,700
                        </Typography>
                        <Typography
                          variant="h6"
                          fontSize="16px"
                          textAlign="end"
                        >
                          Homes & Villas
                        </Typography>
                      </Stack>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=900&t=st=1701153552~exp=1701154152~hmac=fb42230ac7236b3b6cebfd1f2b4af146e8f9a9ae640dd7359b7483f365a67ca9"
                      title="green iguana"
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between">
                        <Button size="small">For Rent</Button>
                        <FavoriteIcon sx={{ color: "primary.main" }} />
                      </Stack>
                      <Stack>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="16px"
                        >
                          Red Carpet Real Estate
                        </Typography>
                        <Typography variant="h6" fontSize="16px">
                          210 Zirak Road, Canada
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions>
                      <Stack
                        width="100%"
                        display="flex"
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between
           "
                      >
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="24px"
                          textAlign="start"
                        >
                          $3,700
                        </Typography>
                        <Typography
                          variant="h6"
                          fontSize="16px"
                          textAlign="end"
                        >
                          Homes & Villas
                        </Typography>
                      </Stack>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?w=900&t=st=1701153552~exp=1701154152~hmac=fb42230ac7236b3b6cebfd1f2b4af146e8f9a9ae640dd7359b7483f365a67ca9"
                      title="green iguana"
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between">
                        <Button size="small">For Rent</Button>
                        <FavoriteIcon sx={{ color: "primary.main" }} />
                      </Stack>
                      <Stack>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="16px"
                        >
                          Red Carpet Real Estate
                        </Typography>
                        <Typography variant="h6" fontSize="16px">
                          210 Zirak Road, Canada
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardActions>
                      <Stack
                        width="100%"
                        display="flex"
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between
           "
                      >
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          fontSize="24px"
                          textAlign="start"
                        >
                          $3,700
                        </Typography>
                        <Typography
                          variant="h6"
                          fontSize="16px"
                          textAlign="end"
                        >
                          Homes & Villas
                        </Typography>
                      </Stack>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default RecentProperyListed;
