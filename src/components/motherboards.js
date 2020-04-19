import React from 'react';
import MotherboardInstance from './motherboardInstance';

class Motherboards extends React.Component{

    render(){
        return this.props.theMotherboards.map((motherboard)=>{
            return <MotherboardInstance key={motherboard._id} motherboard={motherboard}
            ReloadDataMethod={this.props.ReloadDataMethod}></MotherboardInstance>
        });
    }
}
export default Motherboards;