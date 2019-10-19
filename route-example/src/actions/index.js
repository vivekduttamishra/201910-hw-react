import axios from 'axios';

import {API_BASE_URL,API_KEY} from '../config';

export const FETCH_POSTS='FETCH_POSTS';
export function fetchPosts(){
    const url=`${API_BASE_URL}?key=${API_KEY}`;
    const request= axios.get(url);

    return {
        type: FETCH_POSTS,
        payload:request
    }
}

export const CREATE_POST='CREATE_POST';
export function createPost(values,fnSuccess){
    //TODO: compute your data to be sent
    console.log('createPost action',values);
    const url=`${API_BASE_URL}?key=${API_KEY}`;
    const request=axios
                    .post(url,values)
                    .then(fnSuccess);  
    return{
        type:CREATE_POST,
        payload:request
    }
}

export const FETCH_POST='FETCH_POST';
export function fetchPost(id){
    //TODO: compute your data to be sent
    let data=null;
    const url=`${API_BASE_URL}/${id}?key=${API_KEY}`;
    var request=axios.get(url);
    return{
        type:FETCH_POST,
        payload:request
    }
}


