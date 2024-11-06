import React,{Component, useEffect, useState} from 'react'

export class LoginFormC extends React.Component{
    state={
        email:'',
        password:''
    }
    componentDidMount(){
        console.log('class component did mount')
    }
    componentDidUpdate(){
        console.log('class component did update')
    }
    componentWillUnmount(){
        console.log('class component will unmount')
    }
    handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
    }
    handlePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
        }
    render(){
        return <div>
              <h2>CLASS EXAMPLE</h2>
         <input value={this.state.email} onChange={this.handleEmail} placeholder='email'/>
         <input value={this.state.password} onChange={this.handlePassword} placeholder='password'/>

        </div>
    }
}

export function LoginFormF (){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    useEffect(()=>{
        console.log('function component did mount')
    },[])
    useEffect(()=>{
        if(email === '')
        return
        console.log('function component did update')
    },[])

    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    return  <div>
     <h2>FUNCTION EXAMPLE</h2>
     <input value={email} onChange={handleEmail} placeholder='email'/>
     <input value={password} onChange={handlePassword} placeholder='password'/>
    </div>
}
