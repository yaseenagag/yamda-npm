export default ( index, input ) => {
  let result
  if (Array.isArray(input) || typeof input === 'string' ) {
    index >= 0 ? result = input[ index ] : result = input[ input.length + index ]
  }
  return result
}
