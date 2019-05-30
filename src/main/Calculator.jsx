import React, {Component} from 'react'
import './Calculator.css'
import Button  from '../Components/Button/Button'
import Display from '../Components/Display/Display'

export default class Calculator extends Component {

    constructor(props){
        super(props);
        this.clearDisplay = this.clearDisplay.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }


    clearDisplay(){
        console.log("Limpar")
    }

    setOperation(operacao){
        console.log(operacao);
    }

    addDigit(digit){
        console.log(digit);
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
                <Display value={0} />
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