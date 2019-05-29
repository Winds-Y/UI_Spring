import React from 'react'
// const ws=new WebSocket('ws://localhost:8080/websocket');
// ws.onopen=function (e) {
//     console.log('connect successfully');
//     ws.send(JSON.stringify({flag:'clint',data:'1'}));
// };
// ws.onmessage=(msg)=>{
//     console.log("message is "+msg);
// };
// ws.onclose=function (e) {
//     console.log('关闭连接');
// };
class Page2 extends React.Component{
    render(){
        // let way=this.props.location.state.way;
        return (
            <div>
                {/*<label>way:{way}</label>*/}
                <div>This is page2</div>
            </div>
        );
    }
}

export default Page2;