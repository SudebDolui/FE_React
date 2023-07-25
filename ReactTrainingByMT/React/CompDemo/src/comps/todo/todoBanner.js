import { Component } from "react";

export class TodoBanner extends Component{

    render = () => 
    <h3 className="bg-primary text-white text-center p-2">
        {this.state.userName}'s Todo List --- ({this.state.todoItems.filter(s => !s.done).length}) items to be done
    </h3>
}