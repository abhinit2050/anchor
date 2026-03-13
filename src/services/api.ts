import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  tagTypes:["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
        query:()=>'/posts',
        providesTags:["Posts"]
    }),

    createPost:builder.mutation({
        query:(newPost)=>({
            url: "/posts",
            method: "POST",
            body: newPost,
        }),
        invalidatesTags:["Posts"]
    })
  })
})

export const { useGetPostsQuery, useCreatePostMutation } = api

