import React from 'react';
import { connect } from 'react-redux';
import {listPatAll} from '../actions'
import { bindActionCreators } from 'redux';
import Affected from '../components/affected'

class PatContainer extends React.Component{

componentWillMount(){
        this.props.listPatAll();
    }

    render(){
        return(
            <React.Fragment>
              <Affected patients={this.props.Data.patients} />
            </React.Fragment>
            )}
        }
const MapStateToProps=(state)=>{
    return{
        Data:state.patients
    }
}    
const MapDispatchToProps=(dispatch)=>{
    return bindActionCreators({listPatAll},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(PatContainer)