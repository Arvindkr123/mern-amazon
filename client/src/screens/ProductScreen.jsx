import React from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {
 const data = useParams();
  return (
    <h1>{data.slug}</h1>
  )
}

export default ProductScreen