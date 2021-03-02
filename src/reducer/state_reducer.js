export  function states(state={},action){
    switch(action.type){
        case 'GET_STATES':
            return {...state,states:action.payload}
        default:
            return state;
    }
}
