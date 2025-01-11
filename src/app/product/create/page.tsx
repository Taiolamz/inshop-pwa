'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const CreateProductSSR = dynamic(() => import('./ssr'), { ssr: true });

const Product = () => {
    return (
        <CreateProductSSR />
    )
}

export default Product