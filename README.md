# vuex4-typed-method

This repo is to summarize patterns I used when organizing Vuex code and demonstrate a migrated method to protect typescript's typing inference along the Vuex code path, meaning "as few implicit `any` or explicit type cast as possible".

## Targeted Demands

This method is opinioned and maybe not fit exactly to your style:

1. It bases on and complements Vuex4 and Vue3 Composition API.
2. It assumes a strong style for organizing an application's Vuex code.
3. It advises using only getters, mutations, actions, rather than direct access to Vuex store's state.

## Fundamental Concept and Source

The fundamental concept is to leverage the Vuex store's endpoints, such as a getter key, in the same way as InjectionKey from Vue3 codebase, to carry types where use them.

All helper functions were gathered in source [typed-helpers.ts](./src/store/typed-helpers.ts). You can copy it to your application repo.

For usage, you can look up the [store implementation](./src/store/modules/) and the component's [setup method](./src/components/Demo/script.ts).

## References

1. You might be interested in the ongoing [discussion for Vuex5](https://github.com/vuejs/rfcs/discussions/270) (in May 2021), which would be designed and implemented especially for Vue3 Composition API. 
2. Vuex repo has issues ([1725](https://github.com/vuejs/vuex/issues/1725), [1695](https://github.com/vuejs/vuex/issues/1695)) related to the same purpose and members contributed many helpful libraries and PRs. Among them, [owlsdepartment/vuex-typed](https://github.com/owlsdepartment/vuex-typed) is the most similar solution, while targeting previous versions and more complex.