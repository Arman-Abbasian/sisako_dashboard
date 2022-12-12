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
        <ResponsiveContainer  width="100%" height={200}>
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={0}
            endAngle={360}
            data={data}
            outerRadius={75}
            fill="#329d9c"
            label
          />
        </PieChart>
        </ResponsiveContainer>
 
    );
  }
export default MainPieChart;
