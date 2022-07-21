const initState = {
  selected: '',
  startTime: 0,
  endTime: 0,
  selectedSearch: '',
}

export const selectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_SELECTION':
      return state

    case 'SET_SELECTION':
      return { ...state, selected: action.payload }

    case 'SET_START_TIME':
      return { ...state, startTime: action.payload }

    case 'SET_END_TIME':
      return { ...state, endTime: action.payload }

    case 'SET_SELECTED_SEARCH':
      return {... state, selectedSearch: action.payload}

    default:
      return state
  }
}
