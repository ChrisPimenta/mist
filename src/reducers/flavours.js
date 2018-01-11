function flavours(state = [], action) {
  switch (action.type) {
    case 'FLAVOUR::INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0, i), //Take everything before the actual element in the state we changing
        { ...state[i], likes: state[i].likes + 1 }, //Take the actual element we are changing and the increased likes
        ...state.slice(i + 1) //Take everything after the actual element in the state we changing
      ]
    default:
      return state;
  }
}

export default flavours;
