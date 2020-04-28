import React, {Component} from 'react';
import { line } from 'react-chartjs-2';

export default class ChartComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ["1","2","3","4","5"],
                datasets: [
                    {
                        label: "Videos Mades",
                        backgroundColor: "rgba(255, 0, 255, 0.75)",
                        data: [4,5,1,10,32,2,12]
                    },
                    {
                        label: "Subscriptions",
                        backgroundColor: "rgba(0,255,0,0.75)",
                        data: [4,5,1,20,12,2,11]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div style={{position: "relative", width:600, height:550 }}>
                <h3>Chart Samples</h3>
                <Line
                    options = {{
                        reponsive: true
                    }}
                    data={this.state.data}
                />
            </div>
        )
    }
}
