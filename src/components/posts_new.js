/**
 * Created by manish on 23/6/17.
 */
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index'
import {validate} from '../common/errors';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';

class PostsNew extends Component{

    onSubmit(props){
        this.props.createPost(props).then(()=>{
            browserHistory.push('/');
        })
    }

    render(){
        const {fields:{title,categories,content}, handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Add new post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger':''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />

                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger':''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>


                <div className={`form-group ${content.touched && content.invalid ? 'has-danger':''}`}>
                    <label>Contents</label>
                    <textarea type="text" className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}




export default reduxForm({
    form:'PostNewForm',
    fields:['title', 'categories', 'content'],
    validate
},null,{createPost})(PostsNew);