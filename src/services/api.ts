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
        async onQueryStarted(newPost, { dispatch, queryFulfilled }) {
            const patchResult = dispatch(
              api.util.updateQueryData("getPosts", undefined, (draft) => {
                draft.unshift({
                  id: Date.now(),
                  ...newPost,
                });
              }),
            );
            try {
            await queryFulfilled
            } catch (err) {
            console.error("Post failed")
            patchResult.undo()
            }
    },
        invalidatesTags:["Posts"]
    })
  })
})

export const { useGetPostsQuery, useCreatePostMutation } = api

