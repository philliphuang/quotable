/*
 * INDEX.JS
 *
 * Redux Framework
 */


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Main from './containers/Main'
 
const store = createStore(reducer)
 
render (
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
)
