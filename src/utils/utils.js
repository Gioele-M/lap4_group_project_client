// Scroll the content of an element vertically can be used inside an onClick, onMouseEnter etc.
// Arguments:
// - elem: the element to scroll (eg document.querySelector('#myText'))
// - interval: scroll interval in ms (length of one tick/ time unit), eg 100 is 10 times per second
// - pixels: how many px to scroll per tick (eg 2 will scroll 2px every tick)
// - callback: a function to run after at the end of the scroll (eg console.log('Finished!'))

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
