import {combineReducers} from 'redux'
import CampgroundsReducer from './CampgroundsReducer'

export default combineReducers({
    getAllData: CampgroundsReducer,
})