export const addTodoAction = item => {
  return {
    type: 'ADD_TODO',
    item
  }
}

export const deleteTodoAction = index => {
  return {
    type: 'DELETE_TODO',
    index
  }
}

