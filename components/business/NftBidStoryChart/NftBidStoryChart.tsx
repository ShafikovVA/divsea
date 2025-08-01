'use client';
import './bid-history-chart.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end',
      fullSize: false,
    },
    title: {
      display: true,
      align: 'start',
      text: 'Bid History',
      font: {
        size: 20,
        lineHeight: 1.35,
        weight: 600,
      },
    },
    tooltip: {
      caretSize: 0,
      backgroundColor: '#141416',
      displayColors: false,
      caretPadding: 20,
      padding: {
        top: 7,
        bottom: 5,
        left: 9,
        right: 7,
      },
      bodyFont: {
        size: 18,
        lineHeight: 1,
        weight: 600,
      },
      callbacks: {
        title: () => '',
        label: function (context) {
          return `${context.formattedValue.replace(',', '.')} ETH`;
        },
      },
    },
  },
  elements: {
    line: {
      borderWidth: 3,
      tension: 0.5,
    },
    point: {
      radius: 10,
      hoverRadius: 11,
      borderWidth: 3,
      hoverBorderWidth: 3,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      ticks: {
        maxTicksLimit: 6,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data: ChartData<'line', number[], string> = {
  labels,
  datasets: [
    {
      label: 'Expenses',
      data: labels.map(() => Math.random()),
      borderColor: '#141416',
      backgroundColor: '#FFFFFF',
    },
  ],
};
const NftBidStoryChart = () => {
  return (
    <div className="bid-history-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default NftBidStoryChart;
