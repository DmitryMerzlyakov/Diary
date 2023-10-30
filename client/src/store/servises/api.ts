import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Repord } from '../../types'

export const repordsApi = createApi({
  reducerPath: 'repordsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  endpoints: (build) => ({
    getRepords: build.query<Repord[], string>({
      query: () => ({
        url: `/records`
      })
    }),
    getByIdRepords: build.query<Repord[], number>({
      query: (id: number) => ({
        url: `/${id}`
      })
    }),
    addNewRepord: build.mutation({
      query: (body) => ({
        url: `/add`,
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ ...body })
      })
    })
  })
})

export const {
  useGetRepordsQuery,
  useAddNewRepordMutation,
  useGetByIdRepordsQuery
} = repordsApi
