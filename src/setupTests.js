import React from 'react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import mockStore from './mockState.js'
import axios from 'axios'

import { mediaReducer } from './State/reducers/mediaReducer'
import { selectionReducer } from './State/reducers/selectionReducer'
import { userReducer } from './State/reducers/userReducer'
import { utubeReducer } from './State/reducers/utubeReducer'

const TestProviders = ({ initState }) => {
  initState ||= mockStore
  let testReducer = () => searchReducer(initState, { type: '@@INIT' })
  const testStore = createStore(testReducer, applyMiddleware(thunk))

  return ({ children }) => <Provider store={testStore}>{children}</Provider>
}

const renderWithReduxProvider = (ui, options = {}) => {
  let TestWrapper = TestProviders(options)
  render(ui, { wrapper: TestWrapper, ...options })
}

// jest.mock('axios')
// axios.get.mockResolvedValue({ data: [{ latlng: [123, 456] }] })

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React

global.render = render
global.userEvent = userEvent
