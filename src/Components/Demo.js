import { Component } from "react";

class Demo extends Component {
    element = (<p>element Component</p>)
    constructor(props) {
        super(props);
        this.state = {
            message: `Hello ${this.props.name}!`,
            son: 13,
        }
        // Ushbu classni funksiyaga biriktirish 
        // this.stateUpdate.bind(this);
    }
    stateUpdate = () => {
        this.setState((state) => {
            return ({
                ...state,
                message: `Assalomu alaykum!`
            })
        });
    }
    componentDidMount() {
        console.log("Demo component starting...");
    };
    componentWillUnmount() {
        console.log("Demo component delete!");
    }
    render() {
        return <div>
            <h2>{this.state.message}</h2>
            {this.element}
            <button onClick={() => this.stateUpdate()}>Demo Switch {this.state.son}</button>
        </div>
    }
}

export { Demo }