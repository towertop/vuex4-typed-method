import type { GetterTree } from 'vuex'
import type { GetterKey } from '../../typed-helpers'
import { IState } from './state'

const impls = {
  COUNT (state: IState) {
    return state.info.count
  },
}

export const COUNT: GetterKey<typeof impls.COUNT> = 'COUNT'

export default impls as GetterTree<IState, any>
