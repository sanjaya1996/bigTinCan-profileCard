import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import RootReducer from './reducers/rootReducer';

import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof RootReducer>;

export default store;
