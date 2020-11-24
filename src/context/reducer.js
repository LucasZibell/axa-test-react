import createObject from '../utils/createObject';

export const INITIAL_STATE = {
  selectedCity: null,
  cities: [],
  filters: {
    name: '',
    age: null,
    wantedFriend: '',
    hairColor: '',
    height: null,
    wantedProfession: '',
    weight: null
  },
  currentPage: 1,
  existNextPage: true,
  pageSize: 20,
  loading: true
};

const ActionTypes = createObject([
  'SET_CITIES',
  'SET_FILTERS',
  'SET_CURRENT_PAGE',
  'EXIST_NEXT_PAGE',
  'SET_PAGE_SIZE',
  'SET_NEW_CITY'
]);

export const actionCreators = {
  setCities: cities => ({ type: ActionTypes.SET_CITIES, payload: cities }),
  setFilters: filters => ({ type: ActionTypes.SET_FILTERS, payload: filters }),
  setCurrentPage: currentPage => ({ type: ActionTypes.SET_CURRENT_PAGE, payload: currentPage }),
  setExistNextPage: exist => ({ type: ActionTypes.EXIST_NEXT_PAGE, payload: exist }),
  setPageSize: newSize => ({ type: ActionTypes.SET_PAGE_SIZE, payload: newSize }),
  setNewCity: newCity => ({ type: ActionTypes.SET_NEW_CITY, payload: newCity })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_CITIES: {
      return { ...state, selectedCity: action.payload.selectedCity, cities: action.payload.cities };
    }
    case ActionTypes.SET_FILTERS: {
      return { ...state, filters: { ...state.filters, ...action.payload }, currentPage: 1 };
    }
    case ActionTypes.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload };
    }
    case ActionTypes.EXIST_NEXT_PAGE: {
      return { ...state, existNextPage: action.payload };
    }
    case ActionTypes.SET_PAGE_SIZE: {
      return { ...state, pageSize: action.payload, currentPage: 1 };
    }
    case ActionTypes.SET_NEW_CITY: {
      return { ...state, selectedCity: action.payload, currentPage: 1 };
    }
    default: {
      return state;
    }
  }
};
