import './index.css';
import React from 'react';
function CreateBar( {onClick} ){
    return (
        <button className="add-text" onClick={onClick}>添加新文档</button>
    );
}

export default CreateBar;
