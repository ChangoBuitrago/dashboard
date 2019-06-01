import instance from '../instance'

export default {

  /* =========================================== */
  /* Energy Endpoints */
  /* =========================================== */

  // GET /short-energy/{device-id}
  // Short (30 sec) energy data for a specific device and timeframe.
  getShortEnergy (cb) {
    instance().get('/api/short-energy/:id')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /short-energy/{device-id}/first
  // First short energy data entry received from a specific device.
  getFirstShortEnergy (cb) {
    instance().get('/api/short-energy/:id/first')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /short-energy/{device-id}/latest
  // Latest short energy data entry received from a specific device.
  getLatestShortEnergy (cb) {
    instance().get('/api/short-energy/:id/latest')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /long-energy/{device-id}
  // Long (5 min) energy data for a specific device and timeframe.
  getLongEnergy (cb) {
    instance().get('/api/long-energy/:id')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /long-energy/{device-id}/first
  // First long energy data entry received from a specific device.
  getFirstLongEnergy (cb) {
    instance().get('/api/long-energy/:id/first')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /long-energy/{device-id}/latest
  // Latest long energy data entry received from a specific device.
  getLatestLongEnergy (cb) {
    instance().get('/api/long-energy/:id/latest')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /modbus/{device-id}
  // Modbus energy data over a specified timeframe for a specific device.
  getModbusEnergy (cb) {
    instance().get('/api/modbus/:id')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /modbus/{device-id}/first
  // First Modbus energy data entry received from a specific device.
  getFirstModbusEnergy (cb) {
    instance().get('/api/modbus/:id/first')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },
  // GET /modbus/{device-id}/latest
  // Latest Modbus energy data entry received from a specific device.
  getLatestModbusEnergy (cb) {
    instance().get('/api/modbus/:id/latest')
      .then(res => cb(res.data))
      .catch(err => console.log(err))
  },

}