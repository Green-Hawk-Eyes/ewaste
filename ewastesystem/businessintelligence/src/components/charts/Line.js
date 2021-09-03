import { Fragment, useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import generateRandomColor from './generateRandomColor'

function LineChart() {

    let [colors, setColors] = useState([])
    useEffect(() => setColors(generateRandomColor(5)), [])

    const data = {
        labels: ['Copper', 'Plastic', 'Glass', 'Iron', 'Steel'],
        datasets: [
          {
            label: 'Television',
            type: 'line',
            data: [37.8, 4000, 2000, 129.5,1400],
            backgroundColor: colors,
            borderColor: colors,
            fill: false,
            borderWidth: 1,
            hoverOffset: 15
          },
          {
            label: 'Computer',
            type:'line',
            data: [2500, 18200, 1100, 0, 3052],
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
            fill: false,
            hoverOffset: 15
          },
          {
            label: 'Mobile',
            type:'line',
            data: [5.4, 244.4, 10, 11.1, 10],
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
            fill: false,
            hoverOffset: 15
          },
        ],
      }

    const options = {
      responsive: true,
      maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
    }

    return(
        <Fragment>
             <Grid container spacing={2} >
              <Grid item style={{display: 'flex', justifyContent: 'center'}}>
                <Typography variant='subtitle'>Co2 Emission (in gms) during production</Typography>
              </Grid>
             </Grid>
            <Bar data={data} options={options}/>
        </Fragment>
    )
} 

export default LineChart