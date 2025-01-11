'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const ProductPreviewSSR = dynamic(() => import('./ssr'), { ssr: true })

const ProductPreview = () => {
    return (
        <ProductPreviewSSR />
    )
}

export default ProductPreview