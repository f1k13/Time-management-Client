import { $plan } from "@/features/plan-item/model/plan";
import { useStore } from "effector-react";
import {
  CartesianGrid,
  Legend,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";

const Dashboard = () => {
  const plan = useStore($plan);
  console.log(plan);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={600}
        height={300}
        data={plan}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Legend />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="startTime"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="endTime" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Dashboard;
