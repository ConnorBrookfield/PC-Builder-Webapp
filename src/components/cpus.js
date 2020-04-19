import React from 'react';
import CpuInstance from './cpuInstance';

class Cpus extends React.Component{

    render(){
        return this.props.theCpus.map((cpu)=>{
            return <CpuInstance key={cpu._id} cpu={cpu}
            ReloadDataMethod={this.props.ReloadDataMethod}></CpuInstance>
        });
    }
}
export default Cpus;