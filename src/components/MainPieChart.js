import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 25 },
  { name: 'Group B', value: 30 },
  { name: 'Group C', value: 35 },
  { name: 'Group D', value: 40 },
  { name: 'Group E', value: 45 },
  { name: 'Group F', value: 55 },
];

 const MainPieChart=()=> {

    return (

        <PieChart width={300} height={200}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            outerRadius={80}
            fill="#329d9c"
            label
          />
        </PieChart>
 
    );
  }
export default MainPieChart;
