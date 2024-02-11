/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adsUnRegisteredAPI = createApi({
    reducerPath: 'unRegisteredUserAds',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/' }),
    tagTypes: ['Ads'],
    endpoints: (build) => ({
        getAllAds: build.query({
            query: () => ({
                url: '/ads',
            }),
            providesTags: (result) => ['Ads'],
        }),
        getChoseAdv: build.query({
            query: (pk) => ({
                url: `/ads/${pk}`,
            }),
            providesTags: (result) => ['Ads'],
        }),
        getChoseImage: build.query({
            query: (pk) => ({
                url: `/images/${pk}`,
            }),
            providesTags: (result) => ['Ads'],
        }),
    }),
});
export const commentsUnRegisteredAPI = createApi({
    reducerPath: 'unRegisteredUserComments',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/' }),
    tagTypes: ['Comments'],
    endpoints: (build) => ({
        getReviewsForAdv: build.query({
            query: (pk) => ({
                url: `/ads/${pk}/comments`,
            }),
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Comments', id })),
                          { type: 'Comments', id: 'LIST' },
                      ]
                    : [{ type: 'Comments', id: 'LIST' }],
        }),
    }),
});
