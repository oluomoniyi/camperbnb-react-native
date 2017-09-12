import { 
    GET_ALL_DATA,
    GET_CAMP_DATA_LOADING,
    GET_CAMP_DATA_RECEIVED,
    GET_CAMP_DATA_ERROR,
    GET_SEARCH_DATA, 
    GET_SEARCH_DATA_LOADING,
    GET_SEARCH_DATA_RECEIVED,
    GET_SEARCH_DATA_ERROR,
    SEARCH
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

    //   fetch(`https://camperbnb.herokuapp.com/api/search/q=`) 
    break;
};
}

export function search(value) {
  return {type: SEARCH, value};
}

// export const getSearch = ({action}) => {
//     switch(action.type) {
//       case GET_SEARCH_DATA:
//         store.dispatch({GET_SEARCH_DATA_LOADING, searchQuery});
//         fetch(`https://camperbnb.herokuapp.com/api/search/q=` + searchQuery)
//         .then(response => response.json())
//         .then(data2 => next({
//           type: GET_SEARCH_DATA_RECEIVED,
//           data
//         }))
//         .catch(error => next({
//           type: GET_SEARCH_DATA_ERROR,
//           error
//         }));
//       default:
//         break;
//     }
// }
