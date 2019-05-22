import React from 'react'
import io from 'socket.io-client'
import Button from "react-bootstrap/Button";

class TestSocketIo extends React.Component{
    constructor(props) {
        const socket=io('http://localhost:8080/');
        console.log('发送连接成功消息');
        socket.emit('message','connect successfully');
        super(props);
        this.state={
            str_from_server:'',
            mySocket:socket,
            str_to_server:''
        };
        this.handleChange=this.handleChange.bind(this);
    }
    componentDidMount(){
        // 必须使用箭头函数，才能使用this
        this.state.mySocket.on('server2client',(res)=>{
            console.log(res);
            this.setState({str_from_server:res.data});
        });
    }

    componentWillUnmount() {
        console.log('close socket');
        this.state.mySocket.close();
    }
    handleChange(event){
        let inputName=event.target.name;
        let inputValue=event.target.value;
        this.setState(
            {
                [inputName]:inputValue
            }
        );
    }
    onSubmit(){
        this.state.mySocket.emit('my_test_msg',this.state.str_to_server);
    }
    render() {
        return (
            <div>
                <input name='str_to_server' type='text' value={this.state.str_to_server}  onChange={this.handleChange}/>
                <Button onClick={e=>{this.onSubmit(e)}} >发送</Button><br/>
                <label>{this.state.str_from_server}</label>
            </div>
        );
    }
}

export default TestSocketIo;