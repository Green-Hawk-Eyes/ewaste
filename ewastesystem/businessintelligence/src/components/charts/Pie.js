import { Fragment, useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import generateRandomColor from './generateRandomColor'

function PieChart() {

    let [colors, setColors] = useState([])
    useEffect(() => setColors(generateRandomColor(10)), [])

    const data = {
        labels: ['Television', 'Computer', 'Mobile'],
        datasets: [
          {
            label: 'Total amount of Co2 Emission',
            data: [7567.3, 26511, 270.9],
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
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
              <Grid item style={{display: 'flex', justifyContent: 'flex-start'}}>
                <Typography variant='subtitle1'>Total amout of Co2 (in gms) Emission during production</Typography>
              </Grid>
             </Grid>
            <Pie data={data} options={options}/>
        </Fragment>
    )
} 

export default PieChart