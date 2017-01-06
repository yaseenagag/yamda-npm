const reduce = ( fn, accumulator, array ) => {
  for ( let i = 0; i < array.length; ++i ) {
    accumulator = fn( accumulator, array[i] )
  }
  return accumulator
}
export default reduce
