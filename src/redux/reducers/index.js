const defaultStore = {
  inputValue: '',
  list: []
}

export default (state = defaultStore, action) => {
  console.log(action)
  return state
}