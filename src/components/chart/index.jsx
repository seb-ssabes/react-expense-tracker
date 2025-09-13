import Chart from 'react-apexcharts'

const options = {
  labels: ["Income", "Expense"],
  colors: ["#64d9beff","#e4b58eff"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#64d9beff","#e4b58eff"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};



export default function TransactionChartSummary({expense = 100, income = 500}) {
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type='pie'
      width={'100%'}
      height={'100%'}
    />
  )
}
