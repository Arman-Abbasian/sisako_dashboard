import {BarChart,XAxis,YAxis,Bar,ResponsiveContainer} from "recharts";

export default function BarChartt({data}) {
  return (
    <ResponsiveContainer width="100%" aspect={1} className="">
    <BarChart width={650} height={300} data={data}>
    <XAxis
    tick={{ fill: "black" }}
    axisLine={false}
    tickLine={false}
    dataKey="name"   />
    <YAxis
    tickCount={7}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "black" }}
          type="number"
          domain={[0, 100]}
    />
    <Bar dataKey="value" barSize={20} fill="#8884d8"/>
  </BarChart>
</ResponsiveContainer>
  );
}