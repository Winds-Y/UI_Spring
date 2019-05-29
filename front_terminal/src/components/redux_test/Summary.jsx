
import React from 'react';
import {connect} from 'react-redux';
function Summary({myValue}){
        return (
            <div>Total Count: {myValue}</div>
        );
}
function mapState(state){
    let sum=0;
    for (const key in state) {
        if (state.hasOwnProperty(key)) {
          sum += state[key];
        }
      }
    return {myValue: sum};
}
export default connect(mapState)(Summary)
