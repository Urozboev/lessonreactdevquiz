import { Component } from "react";

class BigForm extends Component {
    constructor(){
        super();
        this.state = {
            values: {
                firstName: '',
                lastName: '',
                middleName: '',
                address: '',
            }
        }
    }

    handleSubmit = () => {
        alert(JSON.stringify(this.state.values))
    }

    handleOnChange = (e) => {
        this.setState((state) => ({
            values: {
                ...state.values,
                [e.target.name]: e.target.value
            }
        }))
    }
    
    render(){
        const { values } = this.state;
        return <form onSubmit={this.handleSubmit}>
            <div>
                <input type="text" value={values.firstName} name="firstName"  onChange={this.handleOnChange} placeholder="Firstname..." />
            </div>
            <div>
                <input type="text" value={values.lastName} name="lastName"  onChange={this.handleOnChange} placeholder="Lastname..." />
            </div>
            <div>
                <input type="text" value={values.middleName} name="middleName"  onChange={this.handleOnChange} placeholder="MiddleName..." />
            </div>
            <div>
                <input type="text" value={values.address} name="address"  onChange={this.handleOnChange} placeholder="Address..." />
            </div>
            <button type="submit">Submit</button>
        </form>
    }
}

export { BigForm }