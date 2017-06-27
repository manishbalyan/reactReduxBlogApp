/**
 * Created by manish on 23/6/17.
 */
import {FETCH_POSTS, FETCH_POST} from '../actions/index';
const INITIAL_STATE = {all:[],post:null};


// export default (state=INITIAL_STATE,action)=>{
//     switch (action.type){
//         case FETCH_POST:
//             return {...state, all:action.payload.data};
//         default:
//             return state
//     }
// }

const postReducer = (state = {
    all: [],
    post:null


}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            state = {
                ...state,
                all: action.payload.data
            };
            break
        case FETCH_POST:
            state = {
                ...state,
                post: action.payload.data
            };
            break
    }
    return state
}

export default postReducer
