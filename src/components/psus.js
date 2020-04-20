import React from 'react';
import PsuInstance from './psuInstance'

class Psus extends React.Component{

    render(){
        return this.props.thePsus.map((psu)=>{
            return <PsuInstance key={psu._id} psu={psu}
            ReloadDataMethod={this.props.ReloadDataMethod}></PsuInstance>
        });
    }
}
export default Psus;