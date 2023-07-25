import { Component } from "react";

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'Alice',
            todoItems : [
                {action: "Buy Vegetable" , done:false},
                {action: "Attend Meeting at am" , done:true},
                {action: "Go to library" , done:false},
                {action: "Collect tickets" , done:false},
            ],
            newItemValue:" "
        }   
    }

    // changeStateData = () => {
    //     this.setState({
    //         userName: this.state.userName === "Alice" ? "Registered User" : "Unknown User" 
    //     })
    // }

    changeStateData (e) {
        e.preventDefault();
        this.setState({
            userName: this.state.userName === "Alice" ? "Registered User" : "Unknown User" 
        })
    }

    updateNewItemValue = (event) => {
        this.setState({newItemValue: event.target.value})
    }

    createNewTodo = () => {
        if(this.state.todoItems.find(item => item.action === this.state.newItemValue))
        {
            this.setState({
                todoItems : [...this.state.todoItems, {action:this.state.newItemValue, done:false}],
                newItemValue: ""
            })
        }
    }

    todoTableRows = () => {
        return (
            this.state.todoItems.map(item => <tr key = {item.action}>
                <td>{item.action}</td>
                {/* <td>{item.done}</td> */}
                <td>
                    <input type="checkbox" checked={item.done} onChange = {() => this.toggleTodo(item)} />
                </td>
            </tr>)
            )
    }

    toggleTodo = (todo) => this.setState(
        {todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)}
    )

     // render method to render the UI
    render() {
        return (
            <div>
                <h3 className="bg-primary text-white text-center p-2">
                    {this.state.userName}'s Todo List -- 
                    {this.state.todoItems.filter(s => !s.done).length} to be done
                </h3>
                <button className="btn btn-primary m-2"
                // onClick = {this.changeStateData}>
                onClick = {this.changeStateData.bind(this)}>
                    Change
                </button>

                <div className="container-fluid">
                    <input className="form-control" value={this.state.newItemValue} onChange={this.updateNewItemValue}/>
                </div>
                <button className="btn btn-primary m-2" onClick={this.createNewTodo}>Add</button>
            
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Done</td>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoTableRows() }
                    </tbody>
                </table>
            </div>
        )
    };
}