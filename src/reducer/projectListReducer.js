const initialState = {
  isFetching: false,
  items: [],
};

export default function projectListReducer(state = initialState, action) {
  switch (action.type) {
    case 'projectList/request':
      return {
        ...state,
        isFetching: true,
      };
    case 'projectList/recive':
      return {
        ...state,
        isFetching: false,
        items: [...action.payload],
      };
    case 'projectList/append':
      return {
        ...state,
        isFetching: false,
        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
}
