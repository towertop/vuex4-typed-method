import type { Module } from 'vuex'
import state, { IState } from './state';
import getters from './getters';
import mutations from './mutations';

export * from './getters';
export * from './mutations';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions: {},
} as Module<IState, any>;
