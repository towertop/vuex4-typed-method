import type { GetterTree } from 'vuex'
import type { GetterKey } from '../../typed-helpers'
import { IState } from './state'

const impls = {
  COUNT (state: IState) {
    return state.info.count
  },
  IS_MORE_THAN (state: IState) {
    return (n: number) => state.info.count > n
  },
}

// NOTE a bit silly duplicated, 
// for typescript dont support circular type inferring
export const COUNT: GetterKey<typeof impls.COUNT> = 'COUNT'
export const IS_MORE_THAN: GetterKey<typeof impls.IS_MORE_THAN> = 'IS_MORE_THAN'

export default impls as GetterTree<IState, any>
