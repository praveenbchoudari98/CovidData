export  function patients(state={},action){
    switch(action.type){
        case 'GET_PATIENTS':
            return {...state,patients:action.payload}
        default:
            return state;
    }
}