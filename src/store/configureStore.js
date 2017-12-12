import { createStore, combineReducers } from 'redux'
import playersReducer from '../reducers/players'
import filtersReducer from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
            players: playersReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}
