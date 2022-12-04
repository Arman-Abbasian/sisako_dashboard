import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const data = [
  {
    name: "Sun",
    value: 10
  },
  {
    name: "Mon",
    value: 30
  },
  {
    name: "Tue",
    value: 100
  },
  {
    name: "Wed",
    value: 30
  },
  {
    name: "Thu",
    value: 23
  },
  {
    name: "Fri",
    value: 34
  },
  {
    name: "Sat",
    value: 120
  }
];

const SimpleLineChart = () => {
  const [tooltip, setTooltip] = useState(null);
  const [point, setPoints] = useState(null);

  const CustomTooltip = ({ payload }) => {
    if (payload) {
      return (
        <div className="flex justify-center items-center text-white w-16 h-16 rounded-md">
          <p>{payload[0]?.value}</p>
        </div>
      );
    }
    return null;
  };

  const updateTooltip = (e) => {
    let x = Math.round(e.cx);
    let y = Math.round(e.cy);

    tooltip.style.opacity = "1";
    tooltip.style.transform = `translate(${x}px, ${y}px)`;
    tooltip.childNodes[0].innerHTML = e.value;
  };

  const onChartMouseMove = (chart) => {
    if (chart.isTooltipActive) {
      if (point) {
        setPoints(point);
        updateTooltip(chart);
      }
    }
  };

  const onChartMouseLeave = (e) => {
    setPoints(null);
    updateTooltip(e);
  };

  return (
    <div className="flex caption2 flex-col ui-chart">
      <div className="ml-24 flex justify-center flex-col w-48 items-center mt-32 mb-10">
        <p className="caption2">chart 2</p>
        <p className="subheading2">680</p>
      </div>
      <LineChart width={900} height={400} data={data}>
        <CartesianGrid vertical={false} opacity="0.2" />
        <XAxis
          tick={{ fill: "white" }}
          axisLine={false}
          tickLine={false}
          dataKey="name"
        />
        <YAxis
        tick={{ fill: "white" }}
          tickCount={7}
          axisLine={false}
          tickLine={false}
          type="number"
          domain={[0, 100]}
        />
        <Tooltip
          content={<CustomTooltip />}
          viewBox={{ x: 0, y: 0, width: 20, height: 20 }}
          cursor={false}
          position="top"
          wrapperStyle={{ display: "hivalueen" }}
        />
        <Line
          fill="#40C0C0"
          stroke="#40C0C0"
          dot={true}
          type="monotone"
          dataKey="value"
          activeDot={(e) => {
            onChartMouseMove(e);
            onChartMouseLeave(e);
          }}
        />
      </LineChart>
        <div className="ui-chart-tooltip text-white flex items-center justify-center" ref={(ref) => setTooltip(ref)}>
        <div className="ui-chart-tooltip-content"></div>
      </div>
    </div>
  );
};

export default SimpleLineChart;
