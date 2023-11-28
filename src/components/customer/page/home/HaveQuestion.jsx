import { Box, Stack, Container, Button, Typography } from "@mui/material";

const HaveQuestion = () => {
  return (
    <Box>
      <Box>
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack>
              <Typography variant="h4" fontSize="32px" fontWeight="bold">
                Do You Have Questions ?
              </Typography>
              <Typography variant="p" fontSize="14px" fontWeight="bold">
                We'll help you to grow your career and growth.
              </Typography>
            </Stack>
            <Button>Contact us today</Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HaveQuestion;
