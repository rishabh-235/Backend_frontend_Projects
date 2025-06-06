import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApiSlice = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products',
        }),
    }),
});

export const { useGetAllProductsQuery } = productApiSlice;

