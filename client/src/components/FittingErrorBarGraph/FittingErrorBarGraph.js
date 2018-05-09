import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { injectIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  graphCaption: {
    id: 'FittingErrorBarGraph.caption.errors',
    defaultMessage: 'Fitting Errors: ',
  },
});

const FittingErrorBarGraph = ({ errors, intl }) => {
  const chartData = {
    labels: errors.map((val, i) => i + 1),
    datasets: [
      {
        label: 'Fitting Errors',
        data: errors,
        backgroundColor: '#07f',
      },
    ],
  };

  return (
    <Bar
      data={chartData}
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
            label: (tooltipItem, data) => {
              const label = data.datasets[tooltipItem.datasetIndex].label || '';
              return label;
            },
            beforeLabel: (tooltipItem, data) => {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label = `${errors[tooltipItem.index].toFixed(4)}`;
              }
              return label;
            },
            title: () => null,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
};

FittingErrorBarGraph.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.number).isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(FittingErrorBarGraph);
