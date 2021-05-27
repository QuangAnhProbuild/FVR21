import { useState } from 'react'
import Product from './Product'

import './Pricing.css'
import { useEffect } from 'react'

const Pricing = () => {
  const [products, setProducts] = useState([])

  function fetchProducts() {
    setTimeout(() => {
      setProducts([
        {
          id: 'tenor',
          name: 'Tenor Trombone',
          price: 600,
          qualities: [
            'Lorem ipsum.',
            'Lorem ipsum!',
            'Lorem ipsum dolor.',
            'Lorem ipsum?'
          ]
        },
        {
          id: 'bass',
          name: 'Bass Trombone',
          price: 900,
          qualities: [
            'Lorem ipsum.',
            'Lorem ipsum!',
            'Lorem ipsum dolor.',
            'Lorem ipsum?'
          ]
        },
        {
          id: 'valve',
          name: 'Valve Trombone',
          price: 1200,
          qualities: [
            'Plays similar to a Trumpet',
            'Great for Jazz Bands',
            'Lorem ipsum dolor.',
            'Lorem ipsum.'
          ]
        }
      ])
    }, 1000)
  }

  useEffect(() => {
    // Call and API and get products
    fetchProducts()
  }, [])

  return (
    <section id='pricing'>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  )
}

export default Pricing
