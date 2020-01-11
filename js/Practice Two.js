function syncSetTimeout(func, ms) {
  setTimeout(func, ms)
}

const log = () => console.log(`Logging - time ${Date()}`)

console.log('one')
syncSetTimeout(log, 2000)
console.log('two')
