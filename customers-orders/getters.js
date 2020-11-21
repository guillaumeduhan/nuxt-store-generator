export default {
      getCustomersOrders: (state) => {
        if (!state) return {}
        return Object.values(state)
      },
      getCustomersOrderById: (state, customersOrderId) => {
        return state[customersOrderId]
      }
    }