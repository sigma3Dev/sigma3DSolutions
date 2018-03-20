import React              from 'react';
import {FormattedMessage} from 'react-intl';
import {Bar}              from 'react-chartjs-2';
import './BarGraph.css';

const BarGraph = ({
  values,
}) => {
  const chartData = {
    labels: values.map((val, i) => {
      return i + 1;
    }),
    datasets: [
      {
        label: "Differences",
        data: values.map(val => {
          return val.v;
        }),
        backgroundColor: 'rgb(105, 177, 6)'
      }
    ],
  };

  return (
    <div className="bar-graph">
      <Bar
        data={ chartData }
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Deviations: ",
            fontSize: 17,
            fontFamily: 'Arial',
            lineHeight: 1.4,
          },
          legend: {
            display: false,
          },
          animation: {
            duration: 400,
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                let label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                    label = "Vx: " + values[tooltipItem.index].vx.toFixed(2) + " " +
                            "Vy: " + values[tooltipItem.index].vy.toFixed(2) + " " +
                            "Vz: " + values[tooltipItem.index].vz.toFixed(2);
                }
                return label;
              },
              beforeLabel: function(tooltipItem, data) {
                let label = data.datasets[tooltipItem.datasetIndex].label || '';
                if (label) {
                    label = "V: " + values[tooltipItem.index].v.toFixed(2);
                }
                return label;
              },
              title: function(tooltipItem, data) {
                return null;
              },
              
            },
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }}
      />
    </div>
  )
}

export default BarGraph;