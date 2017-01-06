const reject = ( fn, input ) => {
  let result
  if (Array.isArray(input)) {
    result = []
    input.forEach((value) => {
      if ( !fn( value )) {result.push(value)}
    })
  } else if (typeof input == 'object') {
    result = {}
    for (var variable in input) {
      if (!fn( input[variable] )) {
        result[variable] = input[variable]
      }
    }
  } else { result = 'input error'}
  return result
}

export default reject
