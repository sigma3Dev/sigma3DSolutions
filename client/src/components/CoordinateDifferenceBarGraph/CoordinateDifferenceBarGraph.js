import React              from 'react';
import PropTypes          from 'prop-types';
import {Bar}              from 'react-chartjs-2';
import {
  injectIntl,
  defineMessages
}                         from 'react-intl';
import './CoordinateDifferenceBarGraph.css';

const messages = defineMessages({
  graphCaption: {
    id: "CoordinateDifferenceBarGraph.caption.deviation",
    defaultMessage: "Deviation: "
  }
});

const CoordinateDifferenceBarGraph = ({
  values,
  intl,
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
        backgroundColor: '#0375ba'
      }
    ],
  };

  return (
    <Bar
      data={ chartData }
      options={{
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: intl.formatMessage(messages.graphCaption),
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
  )
}

CoordinateDifferenceBarGraph.propTypes = {
  values: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  intl: PropTypes.object.isRequired,
}

export default injectIntl(CoordinateDifferenceBarGraph);