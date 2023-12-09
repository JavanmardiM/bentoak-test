import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const CustomRadarChart = (props) => {
  return (
    <RadarChart height={300} width={300} outerRadius="80%" data={props.data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <PolarRadiusAxis />
      <Radar dataKey="x" stroke="green" fill="green" fillOpacity={0.5} />
    </RadarChart>
  );
};

export default CustomRadarChart;
