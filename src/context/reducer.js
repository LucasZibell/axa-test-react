export const INITIAL_STATE = {
  selectedCity: null,
  cities: []
};

const ActionTypes = ['SET_CITIES'].reduce((acc, elem) => ({ ...acc, [elem]: elem }));

export const actionCreators = {
  setCities: cities => ({ type: ActionTypes.SET_CITIES, payload: cities })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_CITIES: {
      return { ...state, selectedCity: action.payload.selectedCity, cities: action.payload.cities };
    }
    default: {
      return state;
    }
  }
};
