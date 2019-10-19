import React from 'react';


const _component = (props: any) => {
    return (

        <form>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary ">
            <i className="fa fa-sign-in"></i> Login
            </button>
        </form>
    );
};

export default _component;