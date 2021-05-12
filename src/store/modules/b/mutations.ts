import type { MutationTree } from 'vuex'
import type { MutationKey } from '../../typed-helpers'
import type { IState } from './state'

const impls = {

  RESET (state: IState, n: number) {
    state.info.count = n
  },
  
}

export const RESET: MutationKey<typeof impls.RESET> = 'RESET'

export default impls as MutationTree<IState>
