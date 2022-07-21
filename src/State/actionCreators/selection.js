export const setSelectedNote = (data) => {
  return { type: 'SET_SELECTION', payload: data }
}

export const getSelectedNote = (index) => {
  return { type: 'GET_SELECTION', payload: index }
}

export const setStartTime = (data) => {
  return { type: 'SET_START_TIME', payload: data }
}

export const setEndTime = (data) => {
  return { type: 'SET_END_TIME', payload: data }
}

export const setSearchTerm = (data) => {
  return { type: 'SET_SELECTED_SEARCH', payload: data }
}

export const setSelectedPlaylist = (title) => {
  return { type: 'SET_SELECTION', payload: title }
}
