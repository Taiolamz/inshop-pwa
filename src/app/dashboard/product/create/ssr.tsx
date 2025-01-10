import Product from '@/src/components/product/product'
import React from 'react'



function CreateProductSSR() {
    return (
        <Product headerText='Create Product' onShowOptions={() => { }} onCancel={() => { }} onSave={() => { }}>
            <p>sdf</p>
        </Product>
    )
}

export default CreateProductSSR