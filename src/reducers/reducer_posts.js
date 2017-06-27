/**
 * Created by manish on 23/6/17.
 */
import FETCH_POST from '../actions/index';
const INITIAL_STATE = {all:[],post:null};


export default (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case FETCH_POST:
            return {...state, all:action.payload.data}
        default:
            return state
    }
}