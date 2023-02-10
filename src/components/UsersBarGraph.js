import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import "../assets/rightPane.css";
import { Chart, BarSeries } from "@devexpress/dx-react-chart-material-ui";

export const UsersBarGraph = () => {
  const [data, setData] = useState([
    { year: "1950", population: 7, popul: 2 },
    { year: "1960", population: 7, popul: 7 },
    { year: "1970", population: 7, popul: 2 },
    { year: "1980", population: 7, popul: 7 },
    { year: "1990", population: 7, popul: 4 },
    { year: "2000", population: 7, popul: 5 },
    { year: "2010", population: 7, popul: 6 },
  ]);
  return (
    <Paper className="paper">
      <Chart className="chart" data={data}>
        <BarSeries
          valueField="population"
          argumentField="year"
          className="upperBar"
        />
        <BarSeries
          valueField="popul"
          argumentField="year"
          className="lowerBar"
        />
      </Chart>
    </Paper>
  );
};
