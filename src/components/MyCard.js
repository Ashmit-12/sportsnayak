import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  CardContent,
  Grid
} from "@material-ui/core";


const useStyle = makeStyles((theme) => {
  console.log("STYLE", theme);
});

const Navbar = () => {
  const classes = useStyle();

  return (
    <div>
      <card style={{width:40,borderWidth:30}}> </card>
      <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">cricket</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5"></Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">Football</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5"></Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">hockey</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5"></Typography>
            </Grid>
          </Grid>
          </CardContent>

          <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">tennis</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5"></Typography>
            </Grid>
          </Grid>
          </CardContent>
    </div>

  );
};

export default Navbar;
