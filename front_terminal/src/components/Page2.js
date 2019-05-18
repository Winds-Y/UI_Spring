import React from 'react'

class Page2 extends React.Component{
    render(){
        let way=this.props.location.state.way;
        return (
            <div>
                <label>way:{way}</label>
                <div>This is page2</div>
            </div>
        );
    }
}

export default Page2;