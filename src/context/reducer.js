export const INITIAL_STATE = {
  selectedCity: null,
  cities: [],
  filterName: '',
  currentPage: 1,
  existNextPage: true
};

const ActionTypes = ['SET_CITIES', 'SET_FILTER_NAME', 'SET_CURRENT_PAGE', 'EXIST_NEXT_PAGE'].reduce(
  (acc, elem) => ({
    ...acc,
    [elem]: elem
  })
);

export const actionCreators = {
  setCities: cities => ({ type: ActionTypes.SET_CITIES, payload: cities }),
  setFilterName: filter => ({ type: ActionTypes.SET_FILTER_NAME, payload: filter }),
  setCurrentPage: currentPage => ({ type: ActionTypes.SET_CURRENT_PAGE, payload: currentPage }),
  setExistNextPage: exist => ({ type: ActionTypes.EXIST_NEXT_PAGE, payload: exist })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_CITIES: {
      return { ...state, selectedCity: action.payload.selectedCity, cities: action.payload.cities };
    }
    case ActionTypes.SET_FILTER_NAME: {
      return { ...state, filterName: action.payload, currentPage: 1 };
    }
    case ActionTypes.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload };
    }
    case ActionTypes.EXIST_NEXT_PAGE: {
      return { ...state, existNextPage: action.payload };
    }
    default: {
      return state;
    }
  }
};
