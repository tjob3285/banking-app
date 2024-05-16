"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ accounts }: DoughnutChartProps) => {
    const accountNames = accounts.map((a) => a.name);
    const balances = accounts.map((a) => a.currentBalance);

    const data = {
        datasets: [
            {
                label: 'Banks',
                data: balances,
                backgroundColor: ['#C55FFC', '#8500D6', '#4D00A3']
            }
        ],
        labels: accountNames
    }
    return <Doughnut 
        data={data} 
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
        />
}

export default DonutChart