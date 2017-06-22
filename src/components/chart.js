/**
 * Created by consultadd on 21/6/17.
 */
import React from 'react'
import _ from 'lodash'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props)=>{
    return(
        <div>
            <Sparklines data={props.data} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div>{average(props.data)} {props.unit}</div>
        </div>
        );
}