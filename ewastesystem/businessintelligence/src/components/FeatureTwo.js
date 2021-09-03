import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PieMobile from "./charts/PieMobile";
import PieTv from "./charts/PieTv";
import PieComputer from "./charts/PieComputer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "0.7rem",
    height: "42vh",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
}));

export default function FeatureTwo() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ paddingTop: "5rem" }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <div style={{ height: "35vh", width: "99%" }}>
              <PieComputer />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <div style={{ height: "35vh", width: "99%" }}>
              <PieTv />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <div style={{ height: "35vh", width: "99%" }}>
              <PieMobile />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <span >
        Material fractions of different products.{" "}
        <a href="https://www.researchgate.net/publication/304614936_A_Review_of_Technology_of_Metal_Recovery_from_Electronic_Waste">
        <img src="https://img.icons8.com/material-two-tone/24/000000/external-link.png"/>
        </a>
      </span>
    </div>
  );
}

