import React from 'react';
import { connect } from 'react-redux';
import {listStatesAll} from '../actions'
import { bindActionCreators } from 'redux';
import States from '../components/States'

class StateContainer extends React.Component{

componentWillMount(){
        this.props.listStatesAll();
    }

    render(){
return(
    <React.Fragment>
   <States states={this.props.state.states} />
    </React.Fragment>
    )}
}
const MapStateToProps=(state)=>{
    return{
        state:state.states
    }
}    
const MapDispatchToProps=(dispatch)=>{
    return bindActionCreators({listStatesAll},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(StateContainer)