import './Product.css'

const Product = ({ id, name, price, qualities }) => {
  return (
    <div className='product' id={id}>
      <div className='level'>{name}</div>
      <h2>${price}</h2>
      <ol>
        {qualities.map(quality => (
          <li key={quality}>{quality}</li>
        ))}
      </ol>
      <button className='btn'>Select</button>
    </div>
  )
}

export default Product
