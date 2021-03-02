import React from 'react';
import { connect } from 'react-redux';
import {listDistAll,clearCache} from '../actions'
import { bindActionCreators } from 'redux';
import Districts from '../components/Districts'

class DistContainer extends React.Component{

componentWillMount(){
        this.props.listDistAll(this.props.match.params.id);
    }
componentWillUnmount(){
    this.props.clearCache();
}
    render(){
        return(
            <React.Fragment>
              <Districts districts={this.props.Data.data} />
            </React.Fragment>
            )}
        }
const MapStateToProps=(state)=>{
    return{
        Data:state.Distdata
    }
}    
const MapDispatchToProps=(dispatch)=>{
    return bindActionCreators({listDistAll,clearCache},dispatch)
}

export default connect(MapStateToProps,MapDispatchToProps)(DistContainer)