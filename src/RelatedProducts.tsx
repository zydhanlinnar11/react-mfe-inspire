import React from 'react'

const products = [
  'https://micro-frontends.org/1-composition-client-only/team-green/images/reco_3.jpg',
  'https://micro-frontends.org/1-composition-client-only/team-green/images/reco_5.jpg',
  'https://micro-frontends.org/1-composition-client-only/team-green/images/reco_6.jpg',
]

const RelatedProducts = () => {
  return (
    <>
      {products.map((product, index) => (
        <img
          key={product}
          src={product}
          alt={`Picture ${index}`}
          width="180"
          height="180"
        />
      ))}
    </>
  )
}

export default RelatedProducts
