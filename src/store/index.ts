import { createStore } from 'vuex'
import a from './modules/a'
import b from './modules/b'

export default createStore({
  modules: {
    a,
    b,
  }
})
