import { Box, Typography, Stack, Grid, Container } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Avatar from "@mui/material/Avatar";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FavoriteIcon from "@mui/icons-material/Favorite";
const OurAwards = () => {
  return (
    <Box>
      <Container>
        <Stack gap={10}>
          <Box>
            <Typography
              variant="h4"
              align="center"
              fontSize="35px"
              fontWeight={600}
            >
              Recent Property Listed
            </Typography>
            <Typography variant="h6" align="center" fontSize="16px">
              Over 1,24,000+ Happy User Bieng With Us Still They Love Our
              Services
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Avatar
                    sx={{ bgcolor: "primary.main", width: 56, height: 56 }}
                    variant="rounded"
                  >
                    <EmojiEventsIcon />
                  </Avatar>
                  <Typography
                    variant="h4"
                    fontSize="50px"
                    fontWeight="bold"
                    align="center"
                  >
                    32 M
                  </Typography>
                  <Typography variant="h6" align="center" fontSize="16px">
                    Blue Burmin Award
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Avatar
                    sx={{ bgcolor: "primary.main", width: 56, height: 56 }}
                    variant="rounded"
                  >
                    <BusinessCenterIcon />
                  </Avatar>
                  <Typography
                    variant="h4"
                    fontSize="50px"
                    fontWeight="bold"
                    align="center"
                  >
                    32 M
                  </Typography>
                  <Typography variant="h6" align="center" fontSize="16px">
                    Blue Burmin Award
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Avatar
                    sx={{ bgcolor: "primary.main", width: 56, height: 56 }}
                    variant="rounded"
                  >
                    <LightbulbIcon />
                  </Avatar>
                  <Typography
                    variant="h4"
                    fontSize="50px"
                    fontWeight="bold"
                    align="center"
                  >
                    32 M
                  </Typography>
                  <Typography variant="h6" align="center" fontSize="16px">
                    Blue Burmin Award
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Avatar
                    sx={{ bgcolor: "primary.main", width: 56, height: 56 }}
                    variant="rounded"
                  >
                    <FavoriteIcon />
                  </Avatar>
                  <Typography
                    variant="h4"
                    fontSize="50px"
                    fontWeight="bold"
                    align="center"
                  >
                    32 M
                  </Typography>
                  <Typography variant="h6" align="center" fontSize="16px">
                    Blue Burmin Award
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default OurAwards;
