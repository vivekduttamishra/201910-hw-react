import React from 'react';
import {connect} from 'react-redux';
import {getAllNotes,changeMode} from '../store/action-creators';      
import { NotesStore } from '../model/notes-store';
import {MODE_CREATE,MODE_SIGNIN} from '../store/modes';
import {Link} from 'react-router-dom';


const _component = (props: any) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: 'red'}} >
            
            <Link className="navbar-brand" to='/' >{props.siteTitle}</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to='/note/add' className="nav-link" >
                            <i className="fa fa-plus-circle"></i> Note
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/user/signin"  >
                        <i className="fa fa-sign-in"></i> Login
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"  aria-disabled="true">
                        <i className="fa fa-user-plus"></i> Register
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn  my-2 my-sm-0" type="submit">
                    <i className="fa fa-search"></i> Search
                    </button>
                    <button className="btn  my-2 my-sm-0" type="button"   onClick={props.getAllNotes} >
                    <i className="fa fa-cloud-download"></i> Get All
                    </button>
                </form>
            </div>
        </nav>
    );
};


const mapReduxStateToProps=(state:NotesStore)=>{
    return {        
    }
};


// const mapDsipatchToProps=()=>{
//     return {        
//         //getAllNotes: dispatch(getAllNotes());
//     }
// };


const dispatchers={
    getAllNotes,
    changeMode
};


export default connect(
            mapReduxStateToProps,  //add thses states
            dispatchers             //and these functions
            )( _component);         //as props to my component