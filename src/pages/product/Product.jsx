import React from 'react'
import "./product.scss"
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import { Link } from 'react-router-dom'
import Chart from '../../component/chart/Chart'
import { productData } from '../../productData'
import { Publish } from '@mui/icons-material'


const Product = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="product">
                    <div className="productTitleContainer">
                        <h2 className="productTitle">Product</h2>
                        <Link to="/newProduct">
                            <button className='productAddButton'>Create</button>
                        </Link>
                    </div>

                    <div className="productTop">
                        <div className="productTopLeft">
                            <Chart data={productData} title="Sales Analytics" dataKey="Sales" />
                        </div>

                        <div className="productTopRight">
                            <div className="productInfoTop">
                                <img src="https://m.media-amazon.com/images/I/51Q8DUDT2eL._AC_UY218_.jpg" alt="" />
                                <span className="productName">Apple airpodes</span>
                            </div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">id:</span>
                                    <span className="productInfoValue">123</span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">sales</span>
                                    <span className="productInfoValue">123</span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Instock</span>
                                    <span className="productInfoValue">no</span>
                                </div>
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Active:</span>
                                    <span className="productInfoValue">yes</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="productBottom">
                        <form className="productForm">
                            <div className="productFormLeft">
                                <label htmlFor="">Product Name</label>
                                <input type="text" placeholder='Apple airpod' />
                                <label htmlFor="">In Stock</label>
                                <select name="inStock" id="idStock">
                                    <option value="yes">YES</option>
                                    <option value="no">NO</option>
                                </select>
                                <label htmlFor="">Active</label>
                                <select name="active" id="acitve">
                                    <option value="yes">YES</option>
                                    <option value="no">NO</option>
                                </select>
                            </div>
                            <div className="productFormRight">
                                <img src="https://m.media-amazon.com/images/I/51Q8DUDT2eL._AC_UY218_.jpg" alt="" />
                                <Link  className='link' to="/newProduct">

                                    <button className='updateButton'> <Publish></Publish><span>Update</span></button>
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Product