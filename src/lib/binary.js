const binary = (fn) => (firstArg, secondArg) => fn.call(this, firstArg, secondArg)

export default binary
