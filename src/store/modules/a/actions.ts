/* eslint-disable */
import type { ActionTree, ActionContext } from 'vuex';
import type { IState } from './state'
import { wrapGetter, wrapCommit, ActionKey } from '../../typed-helpers'
import * as myGetters from './getters'
import * as myMutations from './mutations'

const impls = {

  async INCREASE_OR_RESET (
    { commit, getters }: ActionContext<IState, any>,
    payload: { n: number, max: number }
  ) {
    // const isMoreThan = getters[myGetters.IS_MORE_THAN]
    // equals but with type-checking, like
    // isMoreThan: (n: number) => boolean
    const isMoreThan = wrapGetter(getters, myGetters.IS_MORE_THAN)
    const increase = wrapCommit(commit, myMutations.INCREASE)
    const reset = wrapCommit(commit, myMutations.RESET)

    if (isMoreThan(payload.max)) {
      reset(0)
    } else {
      increase(payload.n)
    }
  },

}

export const INCREASE_OR_RESET: ActionKey<typeof impls.INCREASE_OR_RESET> = 'INCREASE_OR_RESET'

export default impls as ActionTree<IState, any>;
