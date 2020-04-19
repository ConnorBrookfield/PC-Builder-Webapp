import React from 'react';
import CaseInstance from './caseInstance';

class Cases extends React.Component{

    render(){
        return this.props.theCases.map((pcCase)=>{
            return <CaseInstance key={pcCase._id} pcCase={pcCase}
            ReloadDataMethod={this.props.ReloadDataMethod}></CaseInstance>
        });
    }
}
export default Cases;