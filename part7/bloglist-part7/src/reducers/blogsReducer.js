const initialState = []

export const updateBlogs = (blogs) => {
  return {
    type: 'UPDATE_BLOGS',
    data: { blogs }
  }
}


const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_BLOGS':
    return action.data.blogs
  default: return state
  }
}

export default blogsReducer