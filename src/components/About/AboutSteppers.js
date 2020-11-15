import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, useTheme } from "@material-ui/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import { Typography, Grid, Avatar, Button } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const timeline = [
  1987,
  2007,
  2008,
  2009,
  2011,
  2013,
  2014,
  2015,
  2017,
  2018,
  2019,
  2020,
  "Goal"
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse"
    },
    alignItems: "center"
  },
  label: {
    backgroundColor: "red"
  },
  space: {
    height: "20vh"
  },
  stepper: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.down("md")]: {
      width: "85%"
    },
    flexGrow: 1
  },
  content: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    },
    // [theme.breakpoints.down('sm')]: {
    //   height: 500,
    // },
    // [theme.breakpoints.up('sm')]: {
    //   height: 500,
    // },
    paddingLeft: theme.spacing.unit * 4
  },
  description: {
    padding: 15,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      paddingTop: 10
    }
  }
}));

const AboutSteppers = () => {
  const { t } = useTranslation("timeline");
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = timeline.length;
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const xxs = useMediaQuery("(max-width: 320px)");
  const avatarSize = xxs ? 120 : xs ? 200 : sm ? 250 : 300;

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <Grid item xs={12} className={classes.root}>
      {!xs || !xxs ? <div className={classes.space}>&nbsp;</div> : null}
      <div
        className={classes.stepper}
        style={{ ...(xxs && { width: "100%" }) }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={6000}
        >
          {timeline.map((step, index) => (
            <div key={step}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div className={classes.content}>
                  <Avatar
                    style={{
                      backgroundColor: green[400],
                      width: avatarSize,
                      height: avatarSize
                    }}
                  >
                    <Typography variant={xxs ? "h4" : xs ? "h2" : "h1"}>
                      <strong>{timeline[activeStep]}</strong>
                    </Typography>
                  </Avatar>
                  <Typography
                    variant={xxs ? "h6" : xs ? "h6" : "h5"}
                    className={classes.description}
                  >
                    {t(timeline[activeStep])}
                  </Typography>
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className={classes.mobileStepper}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Grid>
  );
};

export default AboutSteppers;
