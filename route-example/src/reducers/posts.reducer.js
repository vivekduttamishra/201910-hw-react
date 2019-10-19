import {FETCH_POSTS,FETCH_POST} from '../actions';
import _ from 'lodash';
import { statement } from '@babel/template';

export default function (posts={},action){
    console.log('action',action);
    switch(action.type){
        case FETCH_POST:
            // let post=action.payload.load;
            // let newPosts={ ...state }
            // newPosts[post.id]=post;
            // return newPosts;
            return {...statement,[action.payload.data.id]:action.payload.data};

        case FETCH_POSTS:
            let array=action.payload.data;
            return _.mapKeys(array,'id');
            //return { ...posts, ...newPosts};

        default:
            return posts;

    }
}