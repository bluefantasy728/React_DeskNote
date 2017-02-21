import React from 'react';
import './index.css';

function ItemShowLayer(){
    return (
        <div className="reading">
            <button className="edit">编辑</button>
            <button className="delete">删除</button><br />
            <div className="text-field"></div>
        </div>
    );
}

export default ItemShowLayer;
