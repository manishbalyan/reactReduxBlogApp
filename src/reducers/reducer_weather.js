/**
 * Created by consultadd on 21/6/17.
 */
import {FEATCH_WEATHER} from "../actions/index";

export default (state=[], action)=>{
    switch (action.type){
        case FEATCH_WEATHER:
            return [action.payload.data, ...state]
    }
    return state
}