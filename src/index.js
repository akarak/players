import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import { addPlayer } from './actions/players'
import { setTextFilter } from './actions/filters'
import getPlayers from './selectors/players'

import registerServiceWorker from './registerServiceWorker';

const store = configureStore()
console.log(store.getState())

store.dispatch(addPlayer({ firstname:'John', surname: 'Smith'}))
store.dispatch(addPlayer({ firstname:'Dave', surname: 'Durant'}))
store.dispatch(setTextFilter('a'))

const state = store.getState()
const pp = getPlayers(state.players, state.filters)
console.log(pp)

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

registerServiceWorker();
