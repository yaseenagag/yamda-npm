export default ( fn ) => {
  const table = {}
  return ( arg ) => {
    if( table[ arg ] === undefined ) {
      table[ arg ] = fn( arg )
    }
    return table[ arg ]
  }
}
