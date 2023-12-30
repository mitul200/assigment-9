import { Link } from "react-router-dom";
import { PieChart, Pie, Tooltip } from "recharts";
const StatisticsChart = () => {
  const data01 = [
    { name: "assigment 1", value: 35 },
    { name: "assigment 2", value: 28 },
    { name: "assigment 3", value: 24 },
    { name: "assigment 4", value: 16 },
    { name: "assigment 5", value: 27 },
    { name: "assigment 6", value: 30 },
    { name: "assigment 7", value: 28 },
  ];
  return (
    <div className=" min-h-screen">
      <h2 className=" py-20 text-center text-3xl font-semibold">
        Its my assigment Number :🙈
      </h2>
     <div className="flex justify-center mx-auto">
     <Link to='/' className="">
        <button className="my-btn">Back Home</button>
      </Link>
     </div>
      <PieChart width={1350} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatisticsChart;
