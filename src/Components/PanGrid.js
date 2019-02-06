import React from "react";
import { Grid } from "@material-ui/core";
import Pan from "./Pan";

export default props => (
  <Grid container>
    <Grid item>
      <Pan />
    </Grid>
    <Grid item>
      <Pan />
    </Grid>
    <Grid item>
      <Pan />
    </Grid>
    <Grid item>
      <Pan />
    </Grid>
  </Grid>
);
