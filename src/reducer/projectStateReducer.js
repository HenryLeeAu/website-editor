const initialState = {
  id: null,
  template: '',
  state: {
    past: {
      custom_media: {
        css: '',
        js: '',
      },
    },
    present: {
      custom_media: {
        css: '',
        js: '',
      },
    },
  },
  panel: {
    isSave: false,
    page: true,
    custom: false,
    customKey: null,
    customItemIndex: null,
    alertMessage: false,
  },
  saveState: '',
  saveTime: '',
};

export default function projectStateReducer(state = initialState, action) {
  switch (action.type) {
    case 'projectState/request':
      return {
        ...state,
      };
    case 'projectState/recive':
      return {
        ...state,
        template: action.payload.parsed_html,
        state: {
          past: action.payload.state,
          present: action.payload.state,
        },
        id: action.payload.id,
      };
    case 'projectState/cancelSave':
      return {
        ...state,

        state: {
          ...state.state,
          present: state.state.past,
        },
      };
    case 'projectState/inputUpdate':
      return {
        ...state,
        state: {
          ...state.state,
          present: {
            ...state.state.present,
            body_elements: action.payload.body_elements,
          },
        },
      };
    case 'projectState/removeImage':
      return {
        ...state,
        state: {
          ...state.state,
          present: {
            ...state.state.present,
            body_elements: {
              ...state.state.present.body_elements,
              [action.payload.customKey]: action.payload.customKeyArray,
            },
          },
        },
      };
    case 'projectState/deleteItem':
      //console.log(arrayObj(state.state.present.body_elements[action.payload.customKey][0]))
      return {
        ...state,
        state: {
          ...state.state,
          present: {
            ...state.state.present,
            body_elements: {
              ...state.state.present.body_elements,
              [action.payload.customKey]: action.payload.customKeyArray,
            },
          },
        },
        panel: {
          ...state.panel,

          customItemIndex: action.payload.customItemIndex,
        },
      };
    case 'projectState/addItem':
      //console.log(arrayObj(state.state.present.body_elements[action.payload.customKey][0]))
      return {
        ...state,
        state: {
          ...state.state,
          present: {
            ...state.state.present,
            body_elements: {
              ...state.state.present.body_elements,
              [action.payload.customKey]: [
                action.payload.itemState,
                ...state.state.present.body_elements[action.payload.customKey],
              ],
            },
          },
        },
        panel: {
          ...state.panel,

          customItemIndex: 0,
        },
      };
    case 'projectState/saveingStart':
      return {
        ...state,
        saveState: 'saving',
      };
    case 'projectState/saveingFinish':
      return {
        ...state,
        saveState: 'finish',
        saveTime: action.payload.saveTime,
      };
    case 'projectState/customMediaUpdate':
      return {
        ...state,
        state: {
          ...state.state,
          present: {
            ...state.state.present,
            custom_media: action.payload.custom_media,
          },
        },
      };
    case 'projectState/appendId':
      return {
        ...state,
        id: action.payload.id,
      };
    case 'projectState/openCustomPanel':
      return {
        ...state,
        panel: {
          ...state.panel,
          page: false,
          custom: true,
          customKey: action.payload.customKey,
          customItemIndex: 0,
        },
      };
    case 'projectState/closeCustomPanel':
      return {
        ...state,
        panel: {
          ...state.panel,
          page: true,
          custom: false,
          customKey: null,
          customItemIndex: null,
        },
      };
    case 'projectState/changeCustomItemIndex':
      return {
        ...state,
        panel: {
          ...state.panel,
          customItemIndex: action.payload.customItemIndex,
        },
      };
    case 'projectState/enableSave':
      return {
        ...state,
        panel: {
          ...state.panel,
          isSave: true,
        },
      };
    case 'projectState/disableSave':
      return {
        ...state,
        panel: {
          ...state.panel,
          isSave: false,
        },
      };
    case 'projectState/showAlert':
      return {
        ...state,
        panel: {
          ...state.panel,
          alertMessage: true,
        },
      };
    case 'projectState/hiddenAlert':
      return {
        ...state,
        panel: {
          ...state.panel,
          alertMessage: false,
        },
      };
    case 'projectState/finish':
      return {
        ...initialState,
      };

    /*case 'projectList/recive':
    return {
      ...state,
      isFetching: false,
      items:[ ...action.payload]
    }
  case 'projectList/append':
    return {
      ...state,
      isFetching: false,
      items:[ 
        ...state.items,
        action.payload
      ]
    }*/

    default:
      return state;
  }
}
