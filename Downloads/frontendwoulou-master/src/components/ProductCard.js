import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className='product-card position-relative'>
            <div className='product-image'>
                <img src='images/watch.jpg' alt='product-card'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='produit-title'>
                  Montre En lelt right Or
                </h5>
             
               <p className='price'>500Fr</p>
            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column'>
                <Link>
                <img src='images/add-cart.svg' alt='addcart'/>
                
                </Link>

              </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProductCard