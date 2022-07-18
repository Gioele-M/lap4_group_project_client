const initState = {
  selected: '',
}

export const selectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_SELECTION':
      return state

    case 'SET_SELECTION':
      return { selected: action.payload }

    default:
      return state
  }
}
