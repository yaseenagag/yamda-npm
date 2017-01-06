const pick = ( keys, object ) => {
  let result = {}
  for (var i = 0; i < keys.length; i++) {
    if ( keys[i] in object ) {
      let key = keys[i]
      result[key] = object[key]
    }
  }
  return result
}

export default pick
