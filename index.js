function distributeGifts (packOfGifts, reindeers) {
  let packWeights = 0
  let reindeersWeights = 0
  packOfGifts.forEach(i => {
    packWeights += i.length
  })
  reindeers.forEach(i => {
    reindeersWeights += i.length * 2
  })
  return Math.floor(reindeersWeights / packWeights)
}

module.exports = { distributeGifts }
