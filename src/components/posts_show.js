/**
 * Created by manish on 27/6/17.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPost} from '../actions/index';
import {deletePost} from '../actions/index';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';



class PostsShow extends Component{

    constructor(props){
        super(props);
        this.post_id = this.props.params.id;

    }

    componentDidMount(){
        this.props.fetchPost(this.post_id);
    }

    onDeleteClick(){
        this.props.deletePost(this.post_id).then(success=>{
            browserHistory.push('/');
        });
    }


    render(){
        const {post} = this.props;
        if(!post){
            return <div>Loding...</div>
        }

        return(
            <div>
                <Link to={`/`} >Back</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete
                </button>
                <h2>{post.title}</h2>
                <h6>Categories:{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({fetchPost,deletePost},dispatch);
}

const mapStateToProps = (state)=>{
    return {post:state.posts.post}
}


export default connect(mapStateToProps,mapDispatchToProps) (PostsShow);