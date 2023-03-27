import React from "react";
import PropTypes from "prop-types";
import cloneDeep from "lodash/fp/cloneDeep";
import { useTranslation } from "react-i18next";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useMediaQuery } from "@material-ui/core";
import { Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = (theme) => ({
  type: "bar",
  responsive: true,
  tooltips: {
    titleFontSize: 30,
    callbacks: {
      title: (item) => {
        const { label, value } = item[0];
        return `${label}: ${value}/10`;
      },
      label: () => {}
    }
  },
  legend: {
    display: false,
    labels: {
      fontColor: "white",
      fontSize: 18
    }
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        ticks: {
          fontColor: "#ffff"
        },
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontSize: 15,
          fontColor: "#ffff",
          beginAtZero: true,
          min: 0,
          max: 10
        },
        gridLines: {
          color: theme.palette.grey[800]
        }
      }
    ]
  },
  animation: {
    duration: 1000
  },
  maintainAspectRatio: false
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: 20
  },
  avatar: {
    margin: 5,
    display: "flex"
    // backgroundColor: 'white',
  }
}));

const SkillsInfo = ({ objects }) => {
  const { type, flexDirection, data } = objects;
  const { t } = useTranslation("skills");
  const classes = useStyles();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  const xxs = useMediaQuery("(max-width: 320px)");
  const logoSize = xxs ? 40 : xs ? 60 : 120;
  const chartOptions = cloneDeep(options(theme));

  return (
    <Grid
      item
      xs={12}
      className={classes.root}
      style={{
        flexDirection: xs ? "column-reverse" : flexDirection
      }}
    >
      {/* <Grid item style={{ width: xs ? '100%' : '48%' }}> */}
      <Grid item xs={12} sm={5} style={{ width: "100%" }}>
        <Bar
          data={data}
          height={360}
          // width="100%"
          options={chartOptions}
        />
      </Grid>
      {xs && <br />}
      <Grid
        item
        xs={12}
        sm={7}
        style={{
          textAlign: type === "frontend" ? "left" : "right"
        }}
      >
        <Typography variant={xxs ? "h2" : "h1"}>
          <strong>{t(type)}</strong>
        </Typography>
        <Typography variant="h6">{t(`${type}Info`)}</Typography>
        <Grid
          item
          sm={12}
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: type === "frontend" ? "row" : "row-reverse"
          }}
        >
          {data.datasets.map((d) => (
            <Avatar
              key={d.label}
              alt={d.label}
              src={d.logo}
              className={classes.avatar}
              style={{
                width: logoSize,
                height: logoSize,
                backgroundColor: d.backgroundColor
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

SkillsInfo.propTypes = {
  objects: PropTypes.object.isRequired
};

export default SkillsInfo;
