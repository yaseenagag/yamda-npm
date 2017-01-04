const aperture = (predicate, array) => {
  if (predicate > array.length) {
    return []
  }

  let result = []
  let finalIndex = (array.length - predicate) + 1
  for (var index = 0; index < finalIndex; index++) {
    result.push(array.slice(index, (index + predicate)))
  }
  return result
}
export default aperture
