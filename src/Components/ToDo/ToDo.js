import { Component } from 'react';
import { BigForm } from '../BigForm';
import { AddTask } from './AddTask';
import { Tasks } from './Tasks';
import './ToDo.scss'

class ToDo extends Component{
    constructor(){
        super();
        this.state = {
            tasks: [],
        }
    }
    handleOnAddTask = (value) => {
        this.setState((state) => ({
            tasks: [value, ...state.tasks]
        }))
    }
    handleOnDeleteTask = (index) => {
        this.setState((tasks) => ({
            tasks: this.state.tasks.filter((task, i) => i !== index)
        }))
    }
    render(){
        const { tasks } = this.state;
        return <div className="todo">
            <AddTask onChange={this.handleOnAddTask} />
            <Tasks options={ tasks } onDeleteTask={this.handleOnDeleteTask} />
            <div>
                <BigForm />
            </div>
        </div>
    }
}

export { ToDo }