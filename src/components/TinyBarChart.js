import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



 const  TinyBarChart=({data,title})=>  {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={300} height={200} data={data}>
          <Bar dataKey="value" fill="#329d9c" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  export default TinyBarChart;
