import axios from 'axios'

const apiKey = process.env.VUE_APP_API_KEY

export default() => {
  return axios.create({
      /* Using devServer proxy. */
      //baseURL: `https://api-v3.wattwatchers.com.au`,
      withCredentials: true,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
  })
}