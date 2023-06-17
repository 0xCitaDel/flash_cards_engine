import { api } from './api'

export const apiAuth = api.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/token/',
                method: 'post',
                body: { ...credentials }
            })
        }),
    })
})

export const {
    useLoginMutation
} = apiAuth

export const {
  endpoints: { login }
} = apiAuth
