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

import DeleteIcon from "@mui/icons-material/Delete";
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
          <Grid container justifyContent="center" spacing={4}>
            <Grid item xs={6} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Stack justifyContent="center" alignItems="center" gap={2}>
                      <Avatar
                        src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=996&t=st=1701161056~exp=1701161656~hmac=f255861fcf1d2b8c490e5f981e9ed38bea6504d205e5a2fa5f8d01faf1720de2"
                        sx={{ width: 100, height: 100 }}
                      />
                      <Box>
                        <Typography variant="h6" fontSize="14px" align="center">
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

                      <Stack direction="row">
                        <IconButton aria-label="delete">
                          <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <TwitterIcon />
                        </IconButton>
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
                    <Stack justifyContent="center" alignItems="center" gap={2}>
                      <Avatar
                        src="https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?w=996"
                        sx={{ width: 100, height: 100 }}
                      />
                      <Box>
                        <Typography variant="h6" fontSize="14px" align="center">
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

                      <Stack direction="row">
                        <IconButton aria-label="delete">
                          <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <TwitterIcon />
                        </IconButton>
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
                    <Stack justifyContent="center" alignItems="center" gap={2}>
                      <Avatar
                        src="https://img.freepik.com/free-photo/young-gardener-woman-holding-plant-giving-thumbs-up-gesture_231208-10983.jpg?w=996&t=st=1701161189~exp=1701161789~hmac=9659d2fd75c9ea375f645107c128e2ed14d2bf91fd0d5d20bf4a0891bd67ee27"
                        sx={{ width: 100, height: 100 }}
                      />
                      <Box>
                        <Typography variant="h6" fontSize="14px" align="center">
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

                      <Stack direction="row">
                        <IconButton aria-label="delete">
                          <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <TwitterIcon />
                        </IconButton>
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
                    <Stack justifyContent="center" alignItems="center" gap={2}>
                      <Avatar
                        src="https://img.freepik.com/free-photo/enchanting-blinde-woman-trendy-knitted-sweater-expressing-happiness-indoor-portrait-charming-european-woman-standing-orange_197531-12473.jpg?w=996&t=st=1701161277~exp=1701161877~hmac=180d31e2e4cbd71273d5182842e8553677834aa178dcca339420c3481e3836c6"
                        sx={{ width: 100, height: 100 }}
                      />
                      <Box>
                        <Typography variant="h6" fontSize="14px" align="center">
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

                      <Stack direction="row">
                        <IconButton aria-label="delete">
                          <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <TwitterIcon />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default FeaturedAgents;
