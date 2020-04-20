import React from 'react';
import ForumInstance from './forumInstance';

class Forums extends React.Component{

    render(){
        return this.props.theForums.map((forum)=>{
            return <ForumInstance key={forum._id} forum={forum}
            ReloadDataMethod={this.props.ReloadDataMethod}></ForumInstance>
        });
    }
}
export default Forums;