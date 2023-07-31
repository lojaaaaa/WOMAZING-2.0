import axios from 'axios'

export const getApi = async (url) =>{
  try{
    const response = await axios.get(url)
    return response.data
  }
  catch(error){
    console.error(error)
  }
}

export const postItem = async(url, item) =>{
  try{
    const response = await axios.post('https://64c3b72867cfdca3b6602978.mockapi.io/cart', item)
    return response
  }
  catch(err){
    console.log(err)
  }
}