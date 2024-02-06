import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adsUnRegisteredAPI = createApi({
    reducerPath: 'unRegisteredUser',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/' }),
    tagTypes: ['Ads'],
    endpoints: (build) => ({
        getAllAds: build.query({
            query: () => ({
                url: '/ads',
            }),
            providesTags: ['Ads'],
        }),
        getChoseAdv: build.query({
            query: (pk) => ({
                url: `/ads/${pk}`,
            }),
            providesTags: ['Ads'],
        }),
        getReviewsForAdv: build.query({
            query: (pk) => ({
                url: `/ads/${pk}/comments`,
            }),
            providesTags: ['Ads'],
        }),
    }),
});
export const commentsUnRegisteredAPI = createApi({
    reducerPath: 'unRegisteredUser',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/' }),
    tagTypes: ['Ads'],
    endpoints: (build) => ({
        getAllAds: build.query({
            query: () => ({
                url: '/ads',
            }),
            providesTags: ['Ads'],
        }),
        getChoseAdv: build.query({
            query: (pk) => ({
                url: `/ads/${pk}`,
            }),
            providesTags: ['Ads'],
        }),
        getReviewsForAdv: build.query({
            query: (pk) => ({
                url: `/ads/${pk}/comments`,
            }),
            providesTags: ['Ads'],
        }),
    }),
});
