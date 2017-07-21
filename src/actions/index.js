import { 
    GET_ALL_DATA,
    GET_CAMP_DATA_LOADING,
    GET_CAMP_DATA_RECEIVED,
    GET_CAMP_DATA_ERROR,
    GET_SEARCH_DATA,    
} from '../config/types'

export const apiMiddleware = store => next => action => {
  // Pass all actions through by default
  next(action);
  switch (action.type) {
    // In case we receive an action to send an API request
    case GET_ALL_DATA:
      // Dispatch GET_CAMP_DATA_LOADING to update loading state
      store.dispatch({type: GET_CAMP_DATA_LOADING});
      // Make API call and dispatch appropriate actions when done
      fetch(`https://camperbnb.herokuapp.com/api/search/`)
        .then(response => response.json())
        .then(data => next({
          type: GET_CAMP_DATA_RECEIVED,
          data
        }))
        .catch(error => next({
          type: GET_CAMP_DATA_ERROR,
          error
        }));
      break;
    // Do nothing if the action does not interest us
    default:
      break;
  }
};

export const getSearch = (text) => {
    console.log("disapatched",text)
    return {
        type: GET_SEARCH_DATA,
        payload: text,
    };
};