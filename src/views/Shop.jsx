import React, { useEffect, useState } from 'react'
import productservice from '../services/productservice'
import { Link } from 'react-router-dom'

const Shop = () => {
    const [products, setProducts] = useState({})
    const [affiche, setAffiche] = useState(false)
    const GetAllProducts = () =>{
        productservice.GetAll().then((res)=>{
            setProducts(res.data.data)
            setAffiche(true)
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        GetAllProducts()
    },[])
    if (affiche){
  return (
    <div>
<div>
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Shop</h1>
          </div>
        </div>
        <div className="col-lg-7">
        </div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  <div className="untree_co-section product-section before-footer-section">
    <div className="container">
      <div className="row">
        {/* Start Column 1 */}
        {products?.map((item)=>{
            return(
               <div className="col-12 col-md-4 col-lg-3 mb-5">
          <a className="product-item" href="#"> 
          {item.images.map((image)=>{
            return (
                <img src={`http://localhost:3000/file/products/`+ image} className="img-fluid product-thumbnail" />
            )
          })}
            
            <h3 className="product-title">{item.name}</h3>
            <strong className="product-price">{item.price}$</strong>
            <Link to="/cart">
                <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" />
                </span>
            </Link>
            
          </a>
        </div>  
            )
        })}
       
      </div>
    </div>
  </div>
 
</div>

    </div>
  )
}
}
export default Shop