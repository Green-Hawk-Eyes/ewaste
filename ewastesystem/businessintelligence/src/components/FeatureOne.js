import { Fragment } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

import BarChart from "./charts/Bar"
import LineChart from './charts/Line'
import PieChart from './charts/Pie'
import DoughnutChart from './charts/Doughnut'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      textAlign: "center",
      color: theme.palette.text.secondary,
      margin: '0.7rem',
      height: '42vh',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    }
}))

export default function FeatureOne() {
    const classes = useStyles()
    return (
            <div className={classes.root}  style={{paddingTop: '5rem'}}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <Paper className={classes.paper}>
                        <div style={{height: '35vh', width: '99%'}}><LineChart/></div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <Paper className={classes.paper}>
                        <div style={{height: '35vh', width: '99%'}}><PieChart/></div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <Paper className={classes.paper}>
                        <div style={{height: '35vh', width: '99%'}}><DoughnutChart/></div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Paper className={classes.paper}>
                        <div style={{height: '35vh', width: '98%'}}><BarChart/></div>
                    </Paper>
                </Grid>
            </Grid>
            </div>
    )
}
