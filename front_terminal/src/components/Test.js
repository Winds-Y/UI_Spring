import React from 'react'

export default class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            num:1
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <p>Test</p>
            </div>
        );
    }
}