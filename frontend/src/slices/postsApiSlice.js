import { POSTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: POSTS_URL,
            }),
            providesTags: ['Post'],
        }),
    }),
})



export const {useGetPostsQuery} = postsApiSlice
