import React, {Component} from 'react'
import './Calculator.css'
import Button  from '../Components/Button/Button'
import Display from '../Components/Display/Display'

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    // {...  cria um clone do objeto
    state = { ...initialState}

    constructor(props){
        super(props);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }


    clearDisplay(){
        this.setState({ ...initialState });
    }

    setOperation(operacao){
        console.log(operacao);
    }

    addDigit(digit){
        if (digit == '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue == '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + digit;

        this.setState({displayValue, clearDisplay: false});

        if (digit != "."){
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values]; //clonando
            values[i] = newValue;

            this.setState({values});
            console.log(this.state);
        }
    }

    render(){
        /*
        ao inves de usar o bind
        const addDigit = n => this.addDigit(n);
        const setOperation = n => this.setOperation(n);
        const clearDisplay = n => this.clearDisplay(n);
        */
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearDisplay} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}
