import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

//Redux
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { DarkModeProvider } from './context/DarkModeContext';


const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

