import { defineComponent, ref } from 'vue'
import { useNamespacedHelpers, useGetter, useAction } from '@/store/typed-helpers'
import * as moduleA from '@/store/modules/a'
import * as moduleB from '@/store/modules/b'

export default defineComponent({
  setup () {
    const a = useGetter(moduleA.COUNT) // ComputedRef<number>
    const increaseOrReset = useAction(moduleA.INCREASE_OR_RESET) // (payload: {n: number, max: number}) => Promise<void>
    const { useGetter: useBGetter, useMutation: useBMutation } = useNamespacedHelpers('b')
    const b = useBGetter(moduleB.COUNT) // ComputedRef<number>
    const resetB = useBMutation(moduleB.RESET) // (n: number) => void

    const updateB = (e: InputEvent) => {
      resetB(+(e.target as HTMLInputElement)?.value || 0)
    }
    const step = ref(5)
    const doIt = () => {
      increaseOrReset({n: step.value, max: b.value})
    }

    return {
      a,
      step,
      b,
      updateB,
      doIt,
    }
  }
})
