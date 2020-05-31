import blogService from '../services/blogs'

const initialState = []

export const updateBlogs = (blogs) => {
  return {
    type: 'UPDATE_BLOGS',
    data: { blogs }
  }
}

export const initializeBlogs = () => {

  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: { blogs },
    })
  }
}


export const createNewBlog = content => {
  return async dispatch => {
    const newBlog = await blogService.create(content)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog,
    })
  }
}


export const modifyBlog = (id, newObject) => {
  return async dispatch => {
    console.log(newObject)
    const response = await blogService.update(id, newObject)

    console.log('bbbbbbbbbbb')
    console.log(id)
    console.log(response)
    dispatch({
      type: 'MODIFY_BLOG',
      data: { id: id, obj: response }
    })
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: 'REMOVE_BLOG',
      data: id,
    })
  }
}



const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_BLOGS':
    return action.data.blogs
  case 'INIT_BLOGS':
    return action.data.blogs
  case 'NEW_BLOG':
    return [...state, action.data]
  case 'MODIFY_BLOG':
    return state.map(xx => xx.id === action.data.id?action.data.obj:xx)
  case 'REMOVE_BLOG':
    return state.filter(xx => xx.id !== action.data)
  default: return state
  }
}

export default blogsReducer