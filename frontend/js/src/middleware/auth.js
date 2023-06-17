import { createListenerMiddleware } from '@reduxjs/toolkit'
import { apiAuth } from '@app/services/apiAuth'

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: apiAuth.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()

    if (action.payload.access) {
      localStorage.setItem('token', action.payload.access);
    }
  },
})
