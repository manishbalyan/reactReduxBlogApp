/**
 * Created by manish on 23/6/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router'

class PostsIndex extends Component{
    componentWillMount(){
        this.props.fetchPosts();
    }

    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className='btn btn-primary'>
                        New Post
                    </Link>
                </div>
                posts
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({fetchPosts},dispatch);
}


export default connect(null,mapDispatchToProps) (PostsIndex);