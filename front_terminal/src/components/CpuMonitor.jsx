import React from 'react'
import ReactEcharts from "echarts-for-react";
import io from "socket.io-client";
//https://www.cnblogs.com/hhh5460/p/7397006.html (cpu)
// https://www.cnblogs.com/wgl1995/p/6489038.html (销售)
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
            data:time
        },
        yAxis:{},
        series:[
            {
            name:'cpu1',
            type:'line',
            data:cpu1
        },{
            name:'cpu2',
            type:'line',
            data:cpu2
        },{
            name:'cpu3',
            type:'line',
            data:cpu3
        },{
            name:'cpu4',
            type:'line',
            data:cpu4
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

        //CPU
        this.state.mySocket.on('server2client',(res)=>{

            // 从后端获得可以直接用于展示的数组后，
            // 不用其他处理，直接进行setState

            // cpu1=res.data1;
            // cpu2=res.data2;
            // cpu3=res.data3;
            // cpu4=res.data4;


            // 如果从后端获得的不是直接显示的数据，
            // 而是需要加工的数据
            // 必须利用深拷贝对数组进行更新后，再赋值给原来数组，
            // 这样echart才能更新数据

            let temp_time=[...time];
            temp_time.push(res.data[0]);
            temp_time.shift();
            time=[...temp_time];

            let temp_cpu=[...cpu1];
            temp_cpu.push(res.data[1]);
            temp_cpu.shift();
            cpu1=[...temp_cpu];

            temp_cpu=[...cpu2];
            temp_cpu.push(res.data[2]);
            temp_cpu.shift();
            cpu2=[...temp_cpu];

            temp_cpu=[...cpu3];
            temp_cpu.push(res.data[3]);
            temp_cpu.shift();
            cpu3=[...temp_cpu];

            temp_cpu=[...cpu4];
            temp_cpu.push(res.data[4]);
            temp_cpu.shift();
            cpu4=[...temp_cpu];


            // 以下直接在原来的数组上修改，
            // 然后setState 无法更新echart

            // cpu1.push(res.data1[1]);
            // cpu2.push(res.data1[2]);
            // cpu3.push(res.data1[3]);
            // cpu4.push(res.data1[4]);
            // if(cpu1.length>10){
            //     cpu1.shift();
            //     cpu2.shift();
            //     cpu3.shift();
            //     cpu4.shift();
            // }

            this.setState({
                option:this.getOption()
            });

        });

        //销售 从后端获取直接可用数据
        // this.state.mySocket.on('server2client',(res)=>{
        //     res=JSON.parse(res);
        //     let num=res.data;
        //     this.setState({
        //         option: {
        //             title: { text: 'ECharts 入门示例' },
        //             tooltip: {},
        //             xAxis: {
        //                 data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        //             },
        //             yAxis: {},
        //             series: [{
        //                 name: '销量',
        //                 type: 'bar',
        //                 data: num
        //             }]
        //         }
        //     });
        // });
    }

    componentWillUnmount() {
        console.log('close socket');
        this.state.mySocket.on('close_connect','close');
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