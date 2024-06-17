import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../chart/Chart'
import { productsData } from '../../data'
import PublishIcon from '@mui/icons-material/Publish';

export default function Product() {
  return (
    <div className='product'>
        
        <div className="productTitleContainer">
            <h1 className='productTitle'>Product</h1>
            <Link to="/newProduct">
                <button className='productAddButton'>Create</button>
            </Link>
        </div>

        <div className="productTop">

            <div className="productTopLeft">
                <Chart title="Sale In Month" data={productsData} datakey='sales' />
            </div>

            <div className="productTopRight">
                
                <div className="productInfoTop">
                    <img src="../../public/images/p-1.jfif" className='productInfoImg' />
                    <span className='productName'>Asus</span>
                </div>

                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <div className="productInfoKey">ID:</div>
                        <div className="productInfoVlaue">132</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Name:</div>
                        <div className="productInfoVlaue">Asus Laptop</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Sales:</div>
                        <div className="productInfoVlaue">$90000</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Active:</div>
                        <div className="productInfoVlaue">Yes</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">In Stock:</div>
                        <div className="productInfoVlaue">No</div>
                    </div>
                </div>

            </div>

        </div>

        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder='Dell Laptop' />

                    <label htmlFor="">In stock</label>
                    <select id="inStock">
                        <option value="yes">yes</option>
                        <option value="No">No</option>
                    </select>

                    <label htmlFor="">Acive</label>
                    <select id="inStock">
                        <option value="yes">yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className="productFormRight">
                    <div className="productUploader">
                        <img src="../../public/images/p-1.jfif" className='productUploaderImg' />
                        <label> 
                            <PublishIcon/>
                        </label>
                        <input type="file" style={{display:'none'}} />
                    </div>

                    <button className='productButton'>Uplead (Edit)</button>
                </div>
            </form>
        </div>

    </div>
  )
}
