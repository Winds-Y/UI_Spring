import React from 'react'
import '../assets/css/main.css'
import Button from "react-bootstrap/Button";

class Page1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            testStr:''
            ,username:''
            ,password:''
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        console.log("name："+event.target.name);
        console.log("value："+event.target.value);
        let inputName=event.target.name;
        let inputValue=event.target.value;
        this.setState(
            {
                [inputName]:inputValue
            }
        );
        // this.setState({testStr:event.target.value});
    }
    onSubmit(){
        let formData=new FormData();
        formData.append('mask',"login");
        formData.append('username',this.state.username);
        formData.append('password',this.state.password);
        // this.props.history.push('UserList');
        fetch('http://localhost:8080/login',{
            method:'post',
            body:formData
        }).then( (res)=> {
            return res.json();
        }).then( (json)=> {
            console.log(json);
            if(json.code===200){
                console.log("登陆成功");
                this.props.history.push('UserList');
            }else if(json.code===404) {
                console.log("没有该用户");
            }else if(json.code===500){
                console.log("密码错误");
            }
        })
    }
    render(){
        // let way=this.props.location.query.way;
        return (
            <div>
                <h1 className="mainDiv">This is Page1</h1>
                {/*<input name="testStr" type="text" value={this.state.testStr} onChange={this.handleChange}/>*/}
                {/*<h4>{this.state.testStr}</h4>*/}
                {/*<label>From Home:{way}</label><br/>*/}
                <label>用户名：</label>
                <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                <label>密码：</label>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                <Button onClick={e=>{this.onSubmit(e)}} >登陆</Button>
            </div>
        );
    }
}

export default Page1;
