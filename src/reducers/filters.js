// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'abc'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};
