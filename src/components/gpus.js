import React from 'react';
import GpuInstance from './gpuInstance';

class Gpus extends React.Component{

    render(){
        return this.props.theGpus.map((gpu)=>{
            return <GpuInstance key={gpu._id} gpu={gpu}
            ReloadDataMethod={this.props.ReloadDataMethod}></GpuInstance>
        });
    }
}
export default Gpus;