export const scrollElement = (elem, interval, pixels, callback) => {
  let prevState = null

  const intervalRef = setInterval(() => {
    let currState = (elem.scrollTop += pixels)
    elem.scrollTop = currState

    if (currState === prevState) {
      clearInterval(intervalRef)
      callback()
    }
    prevState = currState
    console.log(`currState is ${currState} and prevState is ${prevState}`)
  }, interval)
}
