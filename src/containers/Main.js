import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import NavigationTab from "./NavigationTab";
import ThemeButton from "../components/Menu/ThemeButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundColor: "#eee"
  },
  logo: {
    height: "40vmin"
  }
}));

const Main = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root} container>
        <NavigationTab {...props} />
        {/* <ThemeButton />  */}
      </Grid>
    </>
  );
};

export default Main;
