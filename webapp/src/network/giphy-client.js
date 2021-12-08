import axios from 'axios'

export default axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny',
  responseType: 'json'
})
