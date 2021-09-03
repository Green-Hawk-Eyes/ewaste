import { Fragment, useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import generateRandomColor from './generateRandomColor'

function BarChart() {

    let [colors, setColors] = useState([])
    useEffect(() => setColors(generateRandomColor(5)), [])

    const data = {
        labels: ['Samsung', 'Apple', 'LG', 'Dell'],
        datasets: [
          {
            type: 'bar',
            label: '2020',
            backgroundColor: colors,
            data: [1000,400,700,1000],
            borderColor: 'white',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: '2021',
            backgroundColor: colors,
            data: [900, 500, 1150, 980],
          }
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
                <Typography variant='subtitle1'>Co2 Emission (in gms) by Company in electronic products</Typography>
              </Grid>
             </Grid>
            <Bar data={data} options={options}/>
        </Fragment>
    )
} 

export default BarChart