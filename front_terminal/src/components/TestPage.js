import React from 'react'
import TestPage2 from '@componentsHome/TestPage2'
import {counter,incCounter} from "@utilsHome/lib";

export default class TestPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            num:1
        };
        console.log(counter);
        incCounter();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <p>TestPage1:{counter}</p>
                <hr/>
                <TestPage2/>
            </div>
        );
    }
}