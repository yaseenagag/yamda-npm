const sort = ( comparator, list ) => {
  const result = [ ...list ]

  for( let outer = 0; outer < result.length; outer++ ) {
    for( let inner = 0; inner < result.length - 1; inner++ ) {
      if( comparator( result[ inner ], result[ inner + 1 ] ) > 0 ) {
        const temp = result[ inner + 1 ]
        result[ inner + 1 ] = result[ inner ]
        result[ inner ] = temp
      }
    }
  }

  return result
}

export default sort
