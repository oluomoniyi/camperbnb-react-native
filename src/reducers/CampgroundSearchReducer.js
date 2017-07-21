import { 
    GET_SEARCH_DATA
} from '../config/types'

const INITIAL_STATE = {
    campgrounds: [],
    loading: false,
}

export default reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SEARCH_DATA:
      return Object.assign({}, state, {
            searchText: action.text
        });
    default:
      return state;
    }
};