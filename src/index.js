import React from 'react';
import ReactDOM from 'react-dom';
import { Context } from './components/context';
import { Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import rootReducer from './reducers/rootReducer';

import * as ActionCreators from './actions/actions';
import boundingActions from './actions/boundingActions';

import App from './App';
import './index.css';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const boundedActions = boundingActions(bindActionCreators, store.dispatch, ActionCreators)

ReactDOM.render(
    <Provider store={store}>
        <Context.Provider value={boundedActions}>
            <App />
        </Context.Provider>
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
