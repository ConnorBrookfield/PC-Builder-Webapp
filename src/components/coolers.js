import React from 'react';
import CoolerInstance from './coolerInstance';

class Coolers extends React.Component{

    render(){
        return this.props.theCoolers.map((cooler)=>{
            return <CoolerInstance key={cooler._id} cooler={cooler}
            ReloadDataMethod={this.props.ReloadDataMethod}></CoolerInstance>
        });
    }
}
export default Coolers;