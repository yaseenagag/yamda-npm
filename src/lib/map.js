const map = (fn, functor) => {
  let result, newValue
  if (Array.isArray(functor)) {
    result = []
    functor.forEach((value) => {
      result.push( fn( value ) )
    })
  } else if (typeof functor == 'object') {
    result = {}
    for (var key in functor) {
      result[key] = fn( functor[key] )
    }
  } else { result = 'functor error'}
  return result
}

export default map
