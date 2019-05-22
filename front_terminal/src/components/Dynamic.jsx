import React from 'react'
import ReactEcharts from "echarts-for-react";
import io from "socket.io-client";
//https://www.cnblogs.com/hhh5460/p/7397006.html
class Dynamic extends React.Component{
    constructor(props){
        const socket=io('http://localhost:8080/');
        console.log('发送连接成功消息');
        socket.emit('start_thread','connect successfully');
        super(props);
        // this.state=this.getInitialState();
        this.state={
            mySocket:socket,
            time:['','','','','','','','','',''],
            cpu1:[0,0,0,0,0,0,0,0,0,0],
            cpu2:[0,0,0,0,0,0,0,0,0,0],
            cpu3:[0,0,0,0,0,0,0,0,0,0],
            cpu4:[0,0,0,0,0,0,0,0,0,0],
            option: this.getOption()
        }
    }
    getInitialState=()=>({
        option:this.getOption()
    });
    getOption=()=>({
        title:{
            text:"系统监控走势图"
        },
        tooltip:{},
        legend:{
            data:['cpu1','cpu2','cpu3','cpu4']
        },
        xAxis:{
            data:[]
        },
        yAxis:{},
        series:[{
            name:'cpu1',
            type:'line',
            data:[]
        },{
            name:'cpu2',
            type:'line',
            data:[]
        },{
            name:'cpu3',
            type:'line',
            data:[]
        },{
            name:'cpu4',
            type:'line',
            data:[]
        }]
    });
    componentDidMount(){

        this.state.mySocket.on('server2client',(res)=>{

            console.log(res);
            this.state.time.push(res.data[0]);
            this.state.cpu1.push(parseFloat(res.data[1]));
            this.state.cpu2.push(parseFloat(res.data[2]));
            this.state.cpu3.push(parseFloat(res.data[3]));
            this.state.cpu4.push(parseFloat(res.data[4]));
            if(this.state.time.length>=10){
                this.state.time.shift();
                this.state.cpu1.shift();
                this.state.cpu2.shift();
                this.state.cpu3.shift();
                this.state.cpu4.shift();
            }
            this.setState({option:{
                    xAxis: {
                        data:this.state.time
                    },
                    series: [{
                        name:'cpu1',
                        data:this.state.cpu1
                    },{
                        name:'cpu2',
                        data:this.state.cpu2
                    },{
                        name:'cpu3',
                        data:this.state.cpu3
                    },{
                        name:'cpu4',
                        data:this.state.cpu4
                    }]
                }})
        });
    }

    componentWillUnmount() {
        console.log('close socket');
        this.state.mySocket.close();
    }

    render(){
        return (
            <div>
                <ReactEcharts option={this.state.option} style={{height:400}}/>
            </div>
        );
    }
}

export default Dynamic;