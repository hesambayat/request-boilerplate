// JSON storage over localStorage.

export default {
  get: prop => {
    try {
      const text = window.localStorage[prop]
      const data = JSON.parse(text)
      return data
    } catch (err) {
      return undefined
    }
  },
  set: (prop, value) => {
    const data = JSON.stringify(value)
    try {
      window.localStorage[prop] = data
    } catch (err) {
      console.error(err)
    }
    return true
  }
}