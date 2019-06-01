import instance from '../instance'
import site from '../mockData/site'

// Auxiliary method to simulate mock data. 
const mockInstance = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {

  /* =========================================== */
  /* Site Endpoints */
  /* =========================================== */

  // GET /sites
  // List of sites that are authorized for access by the provided API key.
  getSiteList (cb) {
    mockInstance(site, 1000)
      .then(data => cb(data))

    // instance().get('/api/sites')
    //   .then(res => cb(res.data))
    //   .catch(err => console.log(err))
  },
  // GET /sites/{site-id}
  // Retrieve metadata for a specific site
  getSite (cb) {
    instance().get('/api/sites/:id')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },

}