import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import {fetchPost} from '../actions';

class PostView extends Component{
    constructor(props){
        super(props);
        this.state={};
        //ToDo: component initialzation here!
        //Remeber to Bind event functions
        //this.handleChange=this.handleClick.bind(this);
    }

    componentDidMount(){
        console.log('props',this.props);
        const {id}=this.props.match.params;
        this.props.fetchPost(id);
    }

    render(){
        //ToDo: render logic here
        if(!this.props.post){
            return <div>loading...</div>
        }
        console.log(this.props.post);
        return (
            <div>
                <div className='text-xs-right'>
                    <Link 
                        className='btn btn-primary'
                        to='/'>
                        All Posts
                    </Link>
                </div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.content}</p>                
                <hr/>
                <strong>categories:</strong>{this.props.post.categories}
            </div>
        );
    }

}





const mapStateToProps=(state,ownProps)=>{
    console.log('ownProps',ownProps);
    
    let post=state.posts[ownProps.match.params.id];
    //Todo:return necessary state info
    return {
      post
    };
};


const mapDispatcherToProps=(dispatcher)=>{

    //Todo:add necessary actions
    const actionCreators= {
        fetchPost
    };

    return bindActionCreators(actionCreators,dispatcher);
};
//REMEBER: Remove any other export default from this module
export default connect(mapStateToProps,mapDispatcherToProps)(PostView);



