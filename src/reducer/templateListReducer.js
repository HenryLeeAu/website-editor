const initialState = {
  isFetching: false,
  isPreview: {
    open: false,
    index: -1,
  },
  isCreate: {
    open: false,
  },
  items: [],
  addProjectisFetching: false,
};

export default function projectListReducer(state = initialState, action) {
  switch (action.type) {
    case 'templateList/request':
      return {
        ...state,
        isFetching: true,
      };
    case 'templateList/recive':
      return {
        ...state,
        isFetching: false,
        items: [...action.payload],
      };
    case 'templateList/recive':
      return {
        ...state,
        isFetching: false,
        items: [...action.payload],
      };
    case 'templateList/previewOpen':
      return {
        ...state,
        isPreview: {
          ...state.isPreview,
          open: action.payload.open,
          index: action.payload.index,
        },
      };
    case 'templateList/previewClose':
      return {
        ...state,
        isPreview: {
          ...state.isPreview,
          open: action.payload.open,
          index: -1,
        },
      };
    case 'templateList/createOpen':
      return {
        ...state,
        isCreate: {
          ...state.isCreate,
          open: action.payload.open,
        },
      };
    case 'templateList/createOpen':
      return {
        ...state,
        isCreate: {
          ...state.isCreate,
          open: action.payload.open,
        },
      };
    case 'projectList/add/request':
      return {
        ...state,
        addProjectisFetching: true,
      };
    case 'projectList/add/recive':
      return {
        ...state,
        addProjectisFetching: false,
        finished: true,
      };
    default:
      return state;
  }
}
