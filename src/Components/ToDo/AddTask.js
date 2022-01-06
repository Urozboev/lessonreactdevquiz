import { Component } from 'react';
import './AddTask.scss'

class AddTask extends Component{
    constructor(){
        super();
        this.state = {
            taskValue: '',
        }
    }
    handleOnChange = (e) => {
        const val = e.target.value;
        this.setState({
            taskValue: val,
        })
    }
    handleOnAdd = () => {
        this.props.onChange(this.state.taskValue);
        this.setState({
            taskValue: ''
        })
    }
    render(){
        return <div className="add-task">
            <input type="text" value={this.state.taskValue} onChange={this.handleOnChange} placeholder='Enter taskName...' />
            <button onClick={this.handleOnAdd}>AddTask</button>
        </div>
    }
}

export { AddTask }