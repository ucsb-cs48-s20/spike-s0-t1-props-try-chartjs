import React, { Component } from 'react';
import AddExpenses from '../components/AddExpenses';
import GraphComponent from '../components/GraphComponent';

class HomePage extends Component {
    state = {
        data: [],
        labels: ['Red']
      };

    addExpense = (value) => {
        this.setState({ data: [...this.state.data, value]})
    }

    render() {
        return (
            <div>
                <AddExpenses addValue={this.addExpense}/>
                <GraphComponent label={this.state.labels}
                datas={this.state.data}/>
            </div>
        );
    }
}

export default HomePage;