/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {CustomButton, InputButton} from './button';

class App extends React.Component {
    constructor(props){
        super();
        this.state = {
            count:0,
            username:""
        }
        

    }

    countUp = () => {
        this.setState({
            count: this.state.count+1 
        })
    }

    countDown = () => {
        this.setState({
            count: this.state.count-1
        })
    }

    countMultiple = () => {
        this.setState({
            count: this.state.count*2
        })
    }

    countDivide = () => {
        this.setState({
            count: this.state.count/2
        })
    }

    valueInput = (event) => {
        const val = event.target.value;
        this.setState({
            username: val
        })
        
    }

    // render
    render(){
        return(
            <div className='div1'>
                <h1 className='header'>Tekan tombol</h1>
                <p className='header'>tekan tombol dibawah!:</p>
                <p className='header'>anda menekan tombol sebanyak {this.state.count} kali</p>
                <CustomButton text="Count Up" handleClick={this.countUp}/>
                <CustomButton text="Count Down" handleClick={this.countDown}/>
                <CustomButton text="Count Multiple" handleClick={this.countMultiple}/>
                <CustomButton text="Count Divide" handleClick={this.countDivide}/>
                <input type="text" placeholder='masukan nama' value={this.state.username} onChange={this.valueInput}/>
                <InputButton text="Accept" inputClick={this.valueInput} />
                <p className='header'>your username is: {this.state.username}</p>
            </div>
        )
    }
}
  

export default App;