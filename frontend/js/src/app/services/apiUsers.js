import { api } from "./api"

export const apiUsers = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: 'users/'
            }),
            keepUnusedDataFor: 5
        }),
    })
})

export const {
    useGetUsersQuery
} = apiUsers
