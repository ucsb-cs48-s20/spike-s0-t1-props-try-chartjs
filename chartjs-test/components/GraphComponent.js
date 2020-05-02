import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

export default class ChartComponent extends Component{
	state = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [1,2,3],
      backgroundColor: [
      '#CCC',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  }

  static getDerivedStateFromProps(props, state) {
    return{
      labels: props.label,
      datasets: [{
        data: props.datas,
        backgroundColor: [
        '#CCC',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    }
  }

  render() {
    return (
      <div>
        <h2>Dynamicly refreshed Doughnut Example</h2>
        <Doughnut data={this.state} />
      </div>
    );
  }
}
