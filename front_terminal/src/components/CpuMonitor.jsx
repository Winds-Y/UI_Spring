import React from 'react'
import ReactEcharts from "echarts-for-react";
import io from "socket.io-client";
//https://www.cnblogs.com/hhh5460/p/7397006.html
let time = new Array(10).fill('');
let cpu1 =new Array(10).fill(0);
let cpu2=new Array(10).fill(0);
let cpu3=new Array(10).fill(0);
let cpu4=new Array(10).fill(0);
class CpuMonitor extends React.Component{
    constructor(props){
        const socket=io('http://localhost:8080/');
        console.log('发送连接成功消息');
        socket.emit('start_thread','connect successfully,test CPU');
        super(props);
        // this.state=this.getInitialState();
        this.state={
            mySocket:socket,
            option: this.getOption2()
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
        series:[
            {
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
    getOption2=()=>({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
    componentDidMount(){

        // this.state.mySocket.on('server2client',(res)=>{
        //     console.log(res);
        //     time.push(res.data[0]);
        //     cpu1.push(parseFloat(res.data[1]));
        //     cpu2.push(parseFloat(res.data[2]));
        //     cpu3.push(parseFloat(res.data[3]));
        //     cpu4.push(parseFloat(res.data[4]));
        //     if(time.length>=10){
        //         time.shift();
        //         cpu1.shift();
        //         cpu2.shift();
        //         cpu3.shift();
        //         cpu4.shift();
        //     }
        //     console.log(`time length =${time.length}`);
        //     console.log(`time: ${time}`);
        //     console.log(`cpu1:${cpu1}`);
        //     console.log(`cpu2:${cpu2}`);
        //     console.log(`cpu3:${cpu3}`);
        //     console.log(`cpu4:${cpu4}`);
        //     this.setState({option:{
        //             title:{
        //                 text:"系统监控走势图"
        //             },
        //             tooltip:{},
        //             legend:{
        //                 data:['cpu1','cpu2','cpu3','cpu4']
        //             },
        //             xAxis: {
        //                 data:time
        //             },
        //             yAxis:{},
        //             series: [{
        //                 name:'cpu1',
        //                 type:'line',
        //                 data:cpu1
        //             },{
        //                 name:'cpu2',
        //                 type:'line',
        //                 data:cpu2
        //             },{
        //                 name:'cpu3',
        //                 type:'line',
        //                 data:cpu3
        //             },{
        //                 name:'cpu4',
        //                 type:'line',
        //                 data:cpu4
        //             }]
        //         }});
        //     console.log(`state option is:`);
        //     console.log(this.state.option);
        // });
        this.state.mySocket.on('server2client',(res)=>{
            res=JSON.parse(res);
            let num=res.data;
            this.setState({
                option: {
                    title: { text: 'ECharts 入门示例' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: num
                    }]
                }
            });
        });
    }

    componentWillUnmount() {
        console.log('close socket');
        this.state.mySocket.close();
    }

    render(){
        return (
            <div>
                <ReactEcharts
                    option={this.state.option}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{height:400}}/>
            </div>
        );
    }
}

export default CpuMonitor;