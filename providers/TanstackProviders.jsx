"use client"
import React from 'react'
import { QueryClient,QueryClientProvider, } from '@tanstack/react-query' 


import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export function TanstackProviders({children}) {

    const queryClient= new QueryClient();
    

    return (
        <>
            
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </>
    )
}