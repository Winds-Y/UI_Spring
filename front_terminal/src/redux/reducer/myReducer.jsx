import {Increment,Decrement} from '../action/myAction'
export default(state,action)=>{
    const {counterCaption}=action;
    console.log('in reducer: '+counterCaption);
    console.log(action);
    switch (action.type){
        case Increment:
            return {...state,[counterCaption]:state[counterCaption]+1};
        case Decrement:
            return {...state,[counterCaption]:state[counterCaption]-1};
        default:
            return state
    }
}