import instance from './instance'

export default {
  getSites (cb) {
    instance().get('/albums?_limit=5')
      .then(res => cb(res.data))
  },
}
