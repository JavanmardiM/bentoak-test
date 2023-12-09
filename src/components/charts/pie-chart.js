import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const PieChartComponent = (props) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={props.data}
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {props.data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
