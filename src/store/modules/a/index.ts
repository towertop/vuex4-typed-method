import type { Module } from 'vuex'
import state, { IState } from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export * from './getters';
export * from './mutations';
export * from './actions';

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
} as Module<IState, any>;
