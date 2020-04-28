import React, { Component } from 'react';
import AddExpenses from '../components/AddExpenses';

class App extends Component {
    state = {
      expenses: []
    };

    addExpense = (value) => {
        const newExpense = {
            type: 'expense',
            category: 'entertainment',
            value
        }
        this.setState({ expenses: [...this.state.expenses, newExpense]})
    }

    render() {
        return (
            <div>
                <AddExpenses addValue={this.addExpense}/>
            </div>
        );
    }
}

export default App;