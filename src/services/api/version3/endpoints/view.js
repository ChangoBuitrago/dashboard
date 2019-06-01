import instance from '../instance'
import view from '../mockData/view'

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
  /* View Endpoints */
  /* =========================================== */

  // GET /views
  // List of views that are authorized for access by the provided API key.
  getViewList (cb) {
    mockInstance(view, 1000)
      .then(data => cb(data))

    // instance().get('/api/views')
    //   .then(res => cb(res.data))
    //   .catch(err => console.log(err))
  },
  // GET /views/{view-id}
  // Retrieve metadata for a specific view
  getView (cb) {
    instance().get('/api/views/:id')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
}