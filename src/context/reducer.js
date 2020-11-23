export const INITIAL_STATE = {
  selectedCity: null,
  cities: [],
  filterName: ''
};

const ActionTypes = ['SET_CITIES', 'SET_FILTER_NAME'].reduce((acc, elem) => ({ ...acc, [elem]: elem }));

export const actionCreators = {
  setCities: cities => ({ type: ActionTypes.SET_CITIES, payload: cities }),
  setFilterName: filter => ({ type: ActionTypes.SET_FILTER_NAME, payload: filter })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_CITIES: {
      return { ...state, selectedCity: action.payload.selectedCity, cities: action.payload.cities };
    }
    case ActionTypes.SET_FILTER_NAME: {
      return { ...state, filterName: action.payload };
    }
    default: {
      return state;
    }
  }
};
