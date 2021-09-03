import { Fragment, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import generateRandomColor from "./generateRandomColor";

function PieChart() {
  let [colors, setColors] = useState([]);
  useEffect(() => setColors(generateRandomColor(10)), []);

  const data = {
    labels: ["Steel-11%", "Copper-3%", "Iron-1%", "Plastics-22%", "Lead Glass-50%", "PCBs-5%", "Other Metals-8%"],
    datasets: [
      {
        label: "Typical TV",
        data: [11, 3, 1, 22, 50, 5, 8],
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
        hoverOffset: 15,
      },
    ],
  };

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
  };

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item style={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography variant="subtitle1">
            Material Compostiton of typical TV in %
          </Typography>
        </Grid>
      </Grid>
      <Pie data={data} options={options} />
    </Fragment>
  );
}

export default PieChart;
