import { Fragment, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import generateRandomColor from "./generateRandomColor";

function PieChart() {
  let [colors, setColors] = useState([]);
  useEffect(() => setColors(generateRandomColor(10)), []);

  const data = {
    labels: ["Plastic-30%", "Glass-37%", "Zinc-1%", "Copper-6%", "Steel-17.16%", "Other Metals-8.84%"],
    datasets: [
      {
        label: "Typical Mobile Phone",
        data: [30, 37, 1, 6, 17.16, 8.84],
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
            Material Compostiton of typical Computer in %
          </Typography>
        </Grid>
      </Grid>
      <Pie data={data} options={options} />
    </Fragment>
  );
}

export default PieChart;
