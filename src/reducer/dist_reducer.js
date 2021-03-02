export  function Distdata(state={},action){
    switch(action.type){
        case 'GET_DIST':
            return {...state,data:action.payload}
        case 'CLEAR_CACHE':
            return {...state,data:action.payload}
        default:
            return state;
    }
}
