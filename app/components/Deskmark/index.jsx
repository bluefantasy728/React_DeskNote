import React from 'react';
import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';

export default class Deskmark extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items:[], //一开始列表是空的
            isEditing:2 //0:初始状态；1：处于编辑状态；2：处于展示状态
        };
        this.addText = this.addText.bind(this);
    }

    addText(){

        var isEditing = this.state.isEditing;
        isEditing = (isEditing+1)%3;
        this.setState({
            isEditing,
        });
        console.log(isEditing);
    }

    render(){
        let MainContent = null;
        switch (this.state.isEditing) {
            case 0:
                MainContent = <div>请添加文章</div>
                break;
            case 1:
                MainContent = <ItemEditor />
                break;
            case 2:
                MainContent = <ItemShowLayer />
                break;
        }

        return (
            <div>
                <div className="left-side">
                    <CreateBar onClick={this.addText} />
                    <List />
        		</div>
        		<div className="right-side">
                    {MainContent}
        		</div>
            </div>
        );
    }
}
