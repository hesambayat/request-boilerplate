import { Request, Storage } from '.'

export default async function (path, headers = {}) {
  const host = ''
  const url = `${host}${path}`
  const requestHeaders = {
    ...headers
  }

  const login = Storage.get('login')
  if (login !== undefined) {
    requestHeaders.Authorization = `bearer ${login.token.access_token}`
  }

  const result = await Request(url, {
    headers: new Headers(requestHeaders)
  })

  return result
}