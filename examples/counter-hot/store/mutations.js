export const increment = state => {
  state.count+=3
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}
