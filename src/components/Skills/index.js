import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import SkillsInfo from "./SkillsInfo";
import { frontEndObjects, backEndObjects } from "./data.js";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  }
}));

const Skills = (props) => {
  const classes = useStyles();
  const { value, index } = props;
  const [FrontEnd, setFrontEnd] = useState(null);
  const [BackEnd, setBackEnd] = useState(null);

  useEffect(() => {
    // to have a short delay for the animation to run
    setTimeout(() => {
      setFrontEnd(<SkillsInfo objects={frontEndObjects()} {...props} />);
      setBackEnd(<SkillsInfo objects={backEndObjects()} {...props} />);
    }, 50);

    // clear components on tab change
    return () => {
      setFrontEnd(null);
      setBackEnd(null);
    };
  }, [value]);

  if (value === index) {
    return (
      <Grid item xs={12} className={classes.root}>
        {FrontEnd}
        {BackEnd}
      </Grid>
    );
  }
  return null;
};

Skills.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default Skills;
