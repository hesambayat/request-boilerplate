export default (path, params = {}) => {
  return new Promise((resolve, reject) => {
    window.fetch(path, params)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response
        }

        return reject(response)
      })
      .then(response => {
        return response.json()
      })
      .then(json => {
        return resolve(json)
      })
      .catch(error => {
        return reject(error)
      })
  })
}