import React from 'react';
import RamInstance from './ramInstance';

class Rams extends React.Component{

    render(){
        return this.props.theRams.map((ram)=>{
            return <RamInstance key={ram._id} ram={ram}
            ReloadDataMethod={this.props.ReloadDataMethod}></RamInstance>
        });
    }
}
export default Rams;