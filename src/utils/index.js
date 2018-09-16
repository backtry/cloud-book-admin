import axios from 'axios'

const baseURL='/api/admin'
const instance = axios.create({
    baseURL, 
    timeout: 10000,
  })

  const xhr = {
    get(url, data, config) {
      return new Promise((resolve, reject) => {
        instance.get(url, {params: data}, config).then(res => {
          // if (res.data.code == 401){
          //   Message.error('登录状态失效,正在进行跳转...')
          //   router.push('/login')
          // }
          resolve(res.data)
        })
      })
    },
    post(url, data, config) {
      return new Promise((resolve, reject) => {
        instance.post(url, data, config).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
  
 
export const $axios=xhr