import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import livelyReducer from './reducer/index';
import thunkMiddleware from 'redux-thunk';

//import registerServiceWorker from './registerServiceWorker';
const store = createStore(
  livelyReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

//ReactDOM.render(<routes />, document.getElementById('app'));

//ReactDOM.render(<App />, document.getElementById('root'))
//registerServiceWorker();
