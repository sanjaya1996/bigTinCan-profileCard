import { combineReducers } from 'redux';
import { profilesReducer } from './profilesReducer';

const RootReducer = combineReducers({
  profiles: profilesReducer,
});

export default RootReducer;
