import React from 'react';


const _component=(props:any)=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'red'}}>
        <a className="navbar-brand" href="#">{props.siteTitle}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"><i className="fa fa-plus-circle"></i> Note</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#"><i className="fa fa-sign-in"></i> SignIn</a>
            </li>
            
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </nav>
    
        );
};

export default _component;