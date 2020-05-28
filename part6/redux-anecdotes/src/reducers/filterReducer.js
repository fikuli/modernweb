const initialState = ''

export const updateFilter = (filter) => {
  return {
    type: 'UPDATEFILTER',
    data: { filter }
  }
}


const filterReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'UPDATEFILTER':
      return action.data.filter
    default: return state
  }
}

export default filterReducer