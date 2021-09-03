import { Fragment, useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import generateRandomColor from './generateRandomColor'

function PieChart() {

    let [colors, setColors] = useState([])
    useEffect(() => setColors(generateRandomColor(10)), [])

    const data = {
        labels: ['Ceramics-16%', 'Copper-15%', 'Plastics-47%', 'Iron-3%','Epoxy-9%', 'Other Metals-10%'],
        datasets: [
          {
            label: 'Typical Mobile Phone',
            data: [16, 15, 47, 3,9, 10 ],
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
                <Typography variant='subtitle1'>Material Compostiton of typical mobile phone in %</Typography>
              </Grid>
             </Grid>
            <Pie data={data} options={options}/>
        </Fragment>
    )
} 

export default PieChart