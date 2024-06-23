/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { LuUserCircle } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            displayUsername: ""

        };
    }
        handleregister = () => {
            this.setState({
                displayUsername: this.state.username,
            })
        };

        handleusername = (event) => {
            this.setState({
                username: event.target.value,
            })
        };

        handlepassword = (event) => {
            this.setState({
                password: event.target.value,
            })
        };

        //render
        render() {
            const { username, password, displayUsername } = this.state;
            return(
                <div className="container">
                    <h1 className='font'>Register</h1>
                    <input
                    type="text"
                    className='font input'
                    placeholder='Username'
                    value={username}
                    onChange={this.handleusername}
                    /><LuUserCircle className='icon white'/><br />

                    <input
                    type="password"
                    className='font input'
                    placeholder='Password'
                    value={password}
                    onChange={this.handlepassword}
                    /><IoLockClosedOutline className='icon white' />
                    <br/>


                    <div className='link'>
                        <label className='font white checkbox1'><input type="checkbox" className='cursor checkbox'/>Remember me</label>
                        <a className='blue font cursor forgot' href="#">forgot your password?</a>
                    </div>

                    <button type="submit" id="kosong" className='font input cursor bold' onClick={this.handleregister}>LOGIN</button><br />
                   
                    <p className='font white'>{displayUsername && `username anda adalah ${this.state.username}`}</p>
                  
                    <div>
                       <p className='font white'>have an account?<a className="font cursor blue" href="#">Login</a></p>
                    </div>
                </div>
            )
        }
    
}

export default App;