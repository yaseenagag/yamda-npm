export default ( key, value, object ) => {
  let temp = {}
  temp[key] = value
  return Object.assign( object, temp )
}
