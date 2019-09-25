import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: 'coffee',
        note:'vancouver',
        amount: '8000'
    };

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} /><br/>
                    <input type="text" placeholder="Amount" autoFocus value={this.state.amount} /><br/>
                    <textarea placeholder="Add a note for your expense(optional)" autoFocus value={this.state.note}></textarea>
                    <button>Add Expenses</button>
                </form>
            </div>
        )
    }
}