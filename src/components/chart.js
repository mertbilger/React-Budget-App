import React, { useContext } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { AppContext } from "../context/AppContext";

const COLORS = ["#32CD32", "#dc143c", "#dc143c", "#dc143c"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
    value,

}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text className="font-weight-bold"
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${value} TL`}
        </text>
    );
};
const Chartss = () => {
    const { butce, harcamalar } = useContext(AppContext);
    const totalExpenses = harcamalar.reduce((total, item) => {
        return (total += item.tutar)
    }, 0)
    const Ktutar = butce - totalExpenses;
    const data = [
        { name: "Bütçe", value: Ktutar },
    ];

    const newData = [...data, { name: '', value: totalExpenses }]

    return (
        <PieChart width={900} height={900}>
            <Pie
                data={newData}
                cx={500}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#B22222"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}
export default Chartss;