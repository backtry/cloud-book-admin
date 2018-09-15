import axios from 'axios'

const baseURL='/api/admin'
const instance = axios.create({
    baseURL, 
    timeout: 10000,
  })

const xhr = {
    get (url,data,config){
        return new Promise((resolve,rejest)=>{
            instance.get(url,{params:data},config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                rejest(err)
            })
        })
    },
    post(url,data,config){
        return new Promise((resolve,rejest)=>{
            instance.post(url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                rejest(err)
            })
        })
    }
}
 
export const $axios=xhr