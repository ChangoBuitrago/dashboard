import instance from '../instance'

export default {

  /* =========================================== */
  /* Device Endpoints */
  /* =========================================== */

  // GET /devices
  // List of devices that are authorized for access by the provided API key.
  getDeviceList (cb) {
    instance().get('/api/devices')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /devices/{device-id}
  // Retrieve status, state and metadata for a specific device (including channels and switches).
  getDevice (cb) {
    instance().get('/api/devices/:id')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // PATCH /devices/{device-id}
  // Update metadata and state for a device (including channels and switches).
  patchDevice (cb) {
    instance().patch('/api/devices/:id')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /devices/channel-categories
  // List of category definitions that can be applied to device channels.
  getChannelCategories (cb) {
    instance().get('/api/devices/channel-categories')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /devices/models
  // List of valid device models.
  getValidDeviceModelList (cb) {
    instance().get('/api/devices/models')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },

}