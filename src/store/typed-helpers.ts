/* eslint-disable */
import { computed, ComputedRef } from 'vue'
import { useStore, Commit, Dispatch } from 'vuex'

////////////
// typing
////////////

declare type GetterType<T> =
  T extends (...args: any[]) => any ? ReturnType<T> :
  any

export declare interface GetterKey<T> extends String {}

declare type FirstParamCurriedFunc<T> =
  T extends (first: any) => infer R ? () => R :
  T extends (first: any, payload: infer P) => infer R ? (payload: P) => R :
  Function

declare type MutationType<T> = FirstParamCurriedFunc<T>

export declare interface MutationKey<T> extends String {}

declare type ActionType<T> = FirstParamCurriedFunc<T>

export declare interface ActionKey<T> extends String {}

////////////
// useXXX helpers
////////////

export function useGetter<T> (key: GetterKey<T>, moduleName?: string): ComputedRef<GetterType<T>> {
  const store = useStore()
  const getterKey = (moduleName ? `${moduleName}/` : '') + key
  if (getterKey in store.getters === false) {
    // if (__DEV__) {
      console.error(`[vuex] unknown getter type: ${getterKey}`)
      // return
    // }
  }
  return computed(() => store.getters[getterKey])
}

// NOTE tsc a bit tricky here
//     1. string is value variable and overload with String never proceeds
//     2. type infering with default case warns mismatch with function type the implement returns
export function useMutation<T> (key: MutationKey<T>, moduleName?: string): MutationType<T>
export function useMutation (key: String, moduleName?: string) {
  // NOTE opinioned, not support payloadWithType and options.root
  const store = useStore()
  return function mutationCommitter (payload?: any) {
    store.commit((moduleName ? `${moduleName}/` : '') + key, payload)
  }
}

export function useAction<T> (key: ActionKey<T>, moduleName?: string): ActionType<T>
export function useAction (key: String, moduleName?: string) {
  const store = useStore()
  return function actionDispatcher (payload?: any) {
    return store.dispatch((moduleName ? `${moduleName}/` : '') + key, payload)
  }
}

export function useNamespacedHelpers (moduleName: string) {
  const namespacedUseGetter: typeof useGetter = (key: String) => useGetter(key, moduleName)
  const namespacedUseMutation: typeof useMutation = (key: String) => useMutation(key, moduleName)
  const namespacedUseAction: typeof useAction = (key: String) => useAction(key, moduleName)

  return {
    useGetter: namespacedUseGetter,
    useMutation: namespacedUseMutation,
    useAction: namespacedUseAction,
  }
}

////////////
// interal helpers
////////////

export function wrapGetter<T> (getters: any, key: GetterKey<T>, moduleName?: string): GetterType<T> {
  // for module internal usage, dont maintain reactivity
  return getters[(moduleName ? `${moduleName}/` : '') + key]
}

export function wrapCommit<T> (commit: Commit, key: MutationKey<T>, moduleName?: string): MutationType<T>
export function wrapCommit (commit: Commit, key: String, moduleName?: string) {
  return function mutationCommitter (payload?: any) {
    commit((moduleName ? `${moduleName}/` : '') + key, payload)
  }
}

export function wrapDispatch<T> (dispatch: Dispatch, key: ActionKey<T>, moduleName?: string): ActionType<T>
export function wrapDispatch (dispatch: Dispatch, key: String, moduleName?: string) {
  return function actionDispatcher (payload?: any) {
    return dispatch((moduleName ? `${moduleName}/` : '') + key, payload)
  }
}
