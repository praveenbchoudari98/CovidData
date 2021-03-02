import { combineReducers } from "redux";
import {states} from "./state_reducer";
import {Distdata} from "./dist_reducer";
import {patients} from "./patient_reducer"

const rootReducer=combineReducers({states,Distdata,patients})
export default rootReducer;