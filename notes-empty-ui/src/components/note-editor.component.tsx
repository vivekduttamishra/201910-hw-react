import React from 'react';


const _component = (props: any) => {
    return (
        <div className='container editor'>
            <h1><input placeholder='Note Title' /></h1>
            <div className='editor-div'>
                <textarea placeholder='Your actual note goes here' className='editor-text'>

                </textarea>
        </div>
            <div className='editor-tags'>
                <input placeholder='add category for the notes' />
        </div>
            <div className='editor-options'>
                <button className='btn btn-primary'><i className="fa fa-edit"></i> Note</button>
                <button className='btn btn-danger'><i className="fa fa-trash"></i> Note</button>
            </div>
        </div>
    );
};

export default _component;