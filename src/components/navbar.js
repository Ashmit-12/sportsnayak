import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";


const useStyle = makeStyles((theme) => {
  console.log("STYLE", theme);
});

const Navbar = () => {
  const classes = useStyle();

  return (
    <div>
      <AppBar color="primary" position="static" style={{ flexFlow: 1 }}>
        <Toolbar>

          <Typography variant="h3">CRICKnayak</Typography>

          <span style={{ flexGrow: 10 }}></span>
        
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
