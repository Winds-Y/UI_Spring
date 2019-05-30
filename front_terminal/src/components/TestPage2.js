import React from 'react'
import {counter} from "@utilsHome/lib";

export default class TestPage2 extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            str:'TestPage2'
        };
        console.log('testPage2: '+counter);
    }

    render() {
        return (
            <div>
                <label>num:{this.state.str}</label>
            </div>
        );
    }
}