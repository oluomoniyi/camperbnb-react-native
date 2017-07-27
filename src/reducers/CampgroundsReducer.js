import { 
    GET_ALL_DATA,
    GET_CAMP_DATA_LOADING,
    GET_CAMP_DATA_RECEIVED,
    GET_CAMP_DATA_ERROR,
    GET_SEARCH_DATA, 
    GET_SEARCH_DATA_LOADING,
    GET_SEARCH_DATA_RECEIVED,
    GET_SEARCH_DATA_ERROR
} from '../config/types'

const INITIAL_STATE = {
    campgrounds: [],
    loading: false,
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
        campgrounds: action.data.campgrounds, // update campgrounds array with reponse data
      };
    case GET_CAMP_DATA_ERROR:
      return {
        ...state, 
        error: action.error,
        loading: false,
      };

      case GET_SEARCH_DATA:
      console.log("action",action)
      return {
        ...state,                   // keep the existing state,
        campgrounds: action.data              // but change loading to true
      };

     case GET_SEARCH_DATA_LOADING:
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case GET_SEARCH_DATA_RECEIVED:
      return {
        loading: false,             // set loading to false
        campgrounds: action.data.campgrounds, // update campgrounds array with reponse data
      };
    case GET_SEARCH_DATA_ERROR:
      return {
        ...state, 
        error: action.error,
        loading: false,
      };
    default:
      return state;
    }
};