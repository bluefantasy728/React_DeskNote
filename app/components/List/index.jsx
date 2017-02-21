import './index.css';
import React from 'react';
import ListItem from '../ListItem';

function List (){
    let items = ['文章1','文章2','文章3','文章4'];
    const itemContent = items.map((item, i) =>
        <ListItem key={i} item={item} />
    );
    return(
        <ul className="text-list">
            {itemContent}
        </ul>
    );
}

export default List;
