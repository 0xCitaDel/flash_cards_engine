import { configureStore } from '@reduxjs/toolkit'
import { api } from '@app/services/api'
import authReducer from '@features/auth/authSlice'
import { listenerMiddleware } from '../middleware/auth'

const store = configureStore({
  reducer: {
      [api.reducerPath]: api.reducer,
      auth: authReducer
  },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware)
})
export default store
