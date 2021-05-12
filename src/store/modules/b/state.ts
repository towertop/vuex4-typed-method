export const stateFactory = () => ({
  info: {
    count: 0,
  },
})

export type IState = ReturnType<typeof stateFactory>

export default stateFactory
