import { request } from 'network/request.js'
export function homeMultidata () {
  return request({
    url: '/home/multidata'
  })
}
