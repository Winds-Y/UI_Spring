import React from 'react'
import {increment,decrement} from '@reduxHome/action/myAction'
import {connect} from 'react-redux';
const buttonStyle = {
    margin: "20px"
};

function Counter({caption,myValue, myIncrement, myDecrement}){
    return (
            <div>
                <button style={buttonStyle} onClick={myIncrement}>+</button>
                <button style={buttonStyle} onClick={myDecrement}>-</button>
                <span>{caption} count :{myValue}</span>
            </div>
        )
}
function mapState(state,ownProps){
    return{
        myValue:state[ownProps.caption]
    }
}
function mapDispatch(dispatch,ownProps){
    return {
        myIncrement:()=>{
            dispatch(increment(ownProps.caption))
        },
        myDecrement:()=>{
            dispatch(decrement(ownProps.caption))
        }

    }
}

export default connect(mapState,mapDispatch)(Counter)