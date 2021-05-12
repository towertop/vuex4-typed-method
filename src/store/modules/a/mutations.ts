import type { MutationTree } from 'vuex'
import type { MutationKey } from '../../typed-helpers'
import type { IState } from './state'

const impls = {

  INCREASE (state: IState, n: number) {
    state.info.count += n
  },

  RESET (state: IState, n: number) {
    state.info.count = n
  },
  
}

export const INCREASE: MutationKey<typeof impls.INCREASE> = 'INCREASE'
export const RESET: MutationKey<typeof impls.RESET> = 'RESET'

export default impls as MutationTree<IState>
