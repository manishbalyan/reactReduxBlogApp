/**
 * Created by manish on 26/6/17.
 */

import {ERROR_TYPE} from "./error_type";


export function validate(values) {
    const errors = {};
    if(!values.title){
        errors.title= ERROR_TYPE.TITLE_ERROR
    }
    if(!values.content){
        errors.content= ERROR_TYPE.CONTENT_ERROR
    }
    if(!values.categories){
        errors.categories= ERROR_TYPE.CATEGORIES_ERROR
    }
    return errors
}