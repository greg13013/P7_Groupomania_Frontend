import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

//Redux
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

