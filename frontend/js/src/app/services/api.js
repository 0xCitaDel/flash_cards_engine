import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '@features/auth/authSlice'
import { API_ROOT } from '@constants/api'


const baseQuery = fetchBaseQuery({
    baseUrl: API_ROOT,
    credentioals: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token || localStorage.getItem('token')
            

        if (token && token !== null) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.data.code === 'token_not_valid') {
        const refreshResult = await baseQuery('/token/refresh/', api, extraOptions)

        if (refreshResult?.data) {
            const user = api.getState().auth.user
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    } else if (result?.error?.data.code === 'token_not_valid') {
        api.dispatch(logOut())
        localStorage.removeItem('token')
    }

    return result
}

export const api = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
