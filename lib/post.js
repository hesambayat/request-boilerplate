import { Request, Storage } from '.'

export default async function (path, data = {}, headers = {}) {
  const host = ''
  const url = `${host}${path}`
  const requestHeaders = {
    'Content-Type': 'application/json',
    ...headers
  }

  const login = Storage.get('login')
  if (login !== undefined) {
    requestHeaders.Authorization = `bearer ${login.token.access_token}`
  }

  const result = await Request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers(requestHeaders)
  })

  return result
}