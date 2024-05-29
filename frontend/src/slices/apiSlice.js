// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

const baseQuery = fetchBaseQuery({ BASE_URL })

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ['Product', 'User', 'Order'],
    endpoints: (builder) => ({

    }),
})


