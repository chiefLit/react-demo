import produce from 'immer'

const initialState = {
  inputValue: '',
  list: []
}

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_TODO':
        draft.list.push(action.item)
        draft.inputValue = ''
        break;
      case 'DELETE_TODO':
        draft.list.splice(action.index, 1)
        break;
      default:
        break;
    }
  })
}