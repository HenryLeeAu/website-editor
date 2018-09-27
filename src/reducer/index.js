import { combineReducers } from 'redux';
import templateListReducer from './templateListReducer';
import projectListReducer from './projectListReducer';
import settingsReducer from './settingsReducer';
import projectStateReducer from './projectStateReducer';
const livelyReducer = combineReducers({
  templateList: templateListReducer,
  projectList: projectListReducer,
  settings: settingsReducer,
  projectState: projectStateReducer,
});
export default livelyReducer;
