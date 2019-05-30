import React,{Component} from "react";
import 'whatwg-fetch'
import {Button} from 'react-bootstrap'
// import axios from 'axios'

export default class UserList extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    async componentDidMount(){
        //方法1：
        // axios.get('http://localhost:8080/api/users').then(res=>{
        //     console.log(res)
        // });

        //方法2：
        // const myRquest = new Request('http://localhost:8080/api/users');
        // fetch(myRquest,{
        //     method:"GET",
        //     mode:"cors"
        //     ,headers:{
        //         'Accept': 'application/json, text/plain, */*'
        //     }
        // }).then(function (response) {
        //     return response.json().then(function (json) {
        //         console.log(json);
        //     })
        // });

        //方法3：
        let users =await (await fetch('http://localhost:8080/api/users')).json();
        console.log(users);
        this.setState({users});
    }
    render() {
        let {users=[]}=this.state;
        return (
            <div>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>邮箱</th>
                            <th>性别</th>
                            <th>城市</th>
                            <th>密码</th>
                        </tr>
                    </tbody>
                    <tbody>
                    {users.map(({id,name,email,age,city,gender,password})=>
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{email}</td>
                            <td>{gender}</td>
                            <td>{city}</td>
                            <td>{password}</td>
                            <td>
                                <Button onClick={()=>{this.setState({users});}}>配置</Button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}