const reject = ( fn, input ) => {
  let result
  if (Array.isArray(input)) {
    result = []
    input.forEach((value) => {
      if ( !fn( value )) {result.push(value)}
    })
  } else if (typeof input == 'object') {
    result = {}
    for (var key in input) {
      if (!fn( input[key] )) {
        result[key] = input[key]
      }
    }
  } else { result = 'input error'}
  return result
}

export default reject
