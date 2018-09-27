const initialState = {
  title: '',
  slug: '',
  summary: '',
  description: '',
  sites: [],
  start_dt: '',
  end_date: '',
  is_published: false,
  logo: '',
  isOpen: false,
  publish_to: {
    arn_au: false,
    cio_au: false,
    cio_nz: false,
    cmo_au: false,
    cw_au: false,
    cw_nz: false,
    cso_au: false,
    reseller_nz: false,
    tw: false,
    ggg: false,
  },
};
let newState;
export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case 'settings/recive':
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        start_dt: action.payload.start_dt,
        end_dt: action.payload.end_dt,
        is_published: action.payload.is_published,
        logo: action.payload.logo,
        sites: action.payload.sites,
        publish_to: action.payload.publish_to,
      };
    case 'settings/open':
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case 'settings/close':
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case 'settings/update':
      return {
        logo: action.payload,
      };

    case 'settings/finish':
      return {
        ...initialState,
      };

    case 'settings/change':
      return {
        current: {
          ...newState,
          project_name: action.value.project_name,
        },
        isOpen: true,
        prev: {
          ...newState,
        },
      };
    case 'settings/save':
      newState = action.payload.settings;
      console.log(newState);
      return {
        current: {
          ...newState,
        },
        isOpen: false,
      };

    default:
      return state;
  }
}
