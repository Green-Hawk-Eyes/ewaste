import { Fragment, useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import generateRandomColor from './generateRandomColor'

function DoughnutChart() {

    let [colors, setColors] = useState([])
    useEffect(() => setColors(generateRandomColor(5)), [])

    const data = {
        labels: ['Australia', 'USA', 'India', 'Japan', 'Germany'],
        datasets: [
          {
            label: 'Co2 emission by countries',
            data: [20, 8, 25, 27, 23],
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
              <Grid item style={{display: 'flex', justifyContent: 'flex-start'}} >
                <Typography variant='subtitle1'>Co2 Emission (in %) by Country in electronic producs</Typography>
              </Grid>
             </Grid>
            <Doughnut data={data} options={options}/>
        </Fragment>
    )
} 

export default DoughnutChart