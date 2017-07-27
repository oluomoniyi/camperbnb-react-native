import {combineReducers} from 'redux'
import CampgroundsReducer from './CampgroundsReducer'
//import CampgroundSearchReducer from './CampgroundSearchReducer'

export default combineReducers({
    getAllData: CampgroundsReducer,
    //searchData: CampgroundSearchReducer,
})