export const setSelectedNote = (data) => {
  return { type: 'SET_SELECTION', payload: data }
}

export const getSelectedNote = (index) => {
  return { type: 'GET_SELECTION', paylosd: index }
}
