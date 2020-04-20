import React from 'react';
import StorageInstance from './storageInstance'

class Storages extends React.Component{

    render(){
        return this.props.theStorages.map((storage)=>{
            return <StorageInstance key={storage._id} storage={storage}
            ReloadDataMethod={this.props.ReloadDataMethod}></StorageInstance>
        });
    }
}
export default Storages;