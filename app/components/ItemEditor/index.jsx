import React from 'react';
import './index.css';

function ItemEditor(){
    return (
        <div className="editing">
            <button className="creat">保存</button>
            <button className="cancel">取消</button><br />
            <input type="text" placeholder="请填写标题" /><br />
            <textarea cols="30" rows="15" placeholder="请填写内容"></textarea>
        </div>
    );
}

export default ItemEditor;
