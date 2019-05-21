import instance from './instance'

export default {
  getSites (cb) {
    instance().get('/photos?_limit=3')
      .then(res => cb(res.data))
  },
}
