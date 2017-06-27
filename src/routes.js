/**
 * Created by manish on 23/6/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';


export default (
    <Route path='/' component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path='posts/new' component={PostsNew}/>
    </Route>
);
