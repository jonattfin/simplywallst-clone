import { Grid, Paper, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Paper>
          <Stack>
            <div>
              <GitHubIcon fontSize="small"></GitHubIcon>
            </div>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}
