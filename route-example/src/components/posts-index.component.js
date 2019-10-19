import React,{Component} from 'react';
import {fetchPosts} from '../actions';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
  

class PostsIndex extends Component{
    
    componentDidMount(){
        console.log(this.props);
        this.props.fetchPosts();
    }
    constructor(props){
        super(props);
        this.state={};
        //ToDo: component initialzation here!
        //Remeber to Bind event functions
        //this.handleChange=this.handleClick.bind(this);
    }

    renderPosts(){
        return _.map(this.props.posts, post=>(
            <li key={post.id} className='list-group-item'>
                <a href={`/post/info/${post.id}`}>{post.title}</a>            
            </li>
        ));
    }

    render(){
        //ToDo: render logic here
        
        return (
            <div >
                <div className='text-xs-right'>
                    <button 
                        className='btn btn-primary'
                        onClick={()=>this.props.history.push('/post/new')}
                        >
                        Add a Post
                    </button>
                </div>
                <h3>Recent Blogs</h3>
                
                
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>

        );
    }

}





const mapStateToProps=({posts})=>{
    //console.log('posts',posts);
    //Todo:return necessary state info
    return {
        posts
    };
};


const mapDispatcherToProps=(dispatcher)=>{

    //Todo:add necessary actions
    const actionCreators= {
        fetchPosts
    };

    return bindActionCreators(actionCreators,dispatcher);
};
//REMEBER: Remove any other export default from this module
export default connect(mapStateToProps,
    mapDispatcherToProps
     //,null, {forwardRef: true}
    )(PostsIndex);