import { 
    GET_ALL_DATA,
    GET_CAMP_DATA_LOADING,
    GET_CAMP_DATA_RECEIVED,
    GET_CAMP_DATA_ERROR
} from '../config/types'

const INITIAL_STATE = {
    campgrounds: [],
    loading: true
}

export default reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CAMP_DATA_LOADING:
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case GET_CAMP_DATA_RECEIVED:
      return {
        loading: false,             // set loading to false
        campgrounds: action.data.campgrounds, // update movies array with reponse data
      };
    case GET_CAMP_DATA_ERROR:
      return state;
    default:
      return state;
    }
};