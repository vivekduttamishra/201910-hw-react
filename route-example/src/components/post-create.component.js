import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {Validator} from '../utils/validator';
import {connect} from 'react-redux';
import {createPost} from '../actions';



 class PostCreate extends Component{
    constructor(props){
        super(props);
        console.log('PostCreate props',props);
        this.state={};
        //ToDo: component initialzation here!
        //Remeber to Bind event functions
        //this.handleChange=this.handleClick.bind(this);
        this.renderTextField=this.renderTextField.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
                
    }

    onSubmit(values){
        console.log('submitted values',values);
         this.props.createPost(values,()=>{
             this.props.history.push('/')
             //useHistory().push('/');
         }); 
    }

    renderTextField(field){
        let inputClassName= field.meta.touched && field.meta.invalid ?'is-invalid':'';
        inputClassName+=' form-control';

        return (
            <div className='form-group   '>
                <label>{field.label}</label><br/>
                <input 
                    className={inputClassName} 
                    type='text' 
                    placeholder={field.placeholder}
                    {...field.input}  />
                    <div className='text-help invalid-feedback'>
                        {field.meta.touched?field.meta.error:''}
                    </div>
            </div>            
        );
    }

    render(){
        //ToDo: render logic here
        const {handleSubmit}=this.props;
        return (
            <div className='container'>
                <h1>New Post...</h1>
                <hr/>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                  <Field 
                        name='title' 
                        component={this.renderTextField} 
                        label='Title' 
                        placeholder='Enter Title for the post'
                    />
                  <Field name='categories' component={this.renderTextField} label='Categories/Tags' placeholder='Enter Tags/Categories for the post' />
                  <Field name='content' component={this.renderTextField} label='Post Content' placeholder='Your Thought...' />
                  <button type='submit' className='btn btn-primary'>Submit</button>
                  <Link style={{marginLeft:'5px'}} className='btn btn-danger' to="/">Cancel</Link>
                </form>
            </div>
        );
    }

}

// export default reduxForm({
//     form: 'PostNewForm'
// })(PostCreate);



function validate(values){
    let validator=new Validator(values);
    let errors=validator
        .areRequired('title','categories','content')
        .stringLengthRange('categories',5,50)
        .stringLengthRange('content',10,2000)
        .getError();

   // console.log(errors);
 
    return errors;
}

const mapStateToProps=(state,ownProps)=>{

    //let post=posts[ownProps.match.params.id];
    //Todo:return necessary state info
    return {
        //post
    };
};

export default reduxForm({
    validate,
    form:'PostCreate'
}) (

    connect(null,{createPost})(
    PostCreate
    )    
);


