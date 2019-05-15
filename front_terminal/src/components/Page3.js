import React from 'react'
import Button from "react-bootstrap/Button";

class Page3 extends React.Component{
    render(){
        return (
            <div>
                <div style={{
                    fontSize:'16px',
                    textAlign:'center'
                }}>This is Page3</div>
                <Button onClick={()=>{window.location.href="www.baidu.com"}}/>
            </div>
        );
    }
}

export default Page3;