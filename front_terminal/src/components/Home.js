import React from 'react'
import {Link} from "react-router-dom";

class Home extends React.Component{
    render(){
        return (
            <div>
                <div>This is Home</div>
                <div>
                    <Link to={{pathname:'/Page1',query:{way:'query'}}}>Page1</Link>
                    <Link to={{pathname:'/Page2',state:{way: 'state'}}}>Page2</Link>
                    <Link to="/Page3">Page3</Link>
                    <Link to="/UserList">UserList</Link>
                </div>
            </div>
        );
    }
}
export default Home;