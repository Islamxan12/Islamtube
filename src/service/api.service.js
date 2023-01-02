import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': '293b89b134msh5ff0e3ab15517b1p1d0678jsn00404a85d2f7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}
export const ApiService = {
  async fetching(url){
    const response = await axios.get(`${BASE_URI}/${url}`, options)
    return response.data
  },
}