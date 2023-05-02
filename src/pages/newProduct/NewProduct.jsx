import React from 'react'
import "./newProduct.scss"
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'

const NewProduct = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="newProduct">
                    <h2 className="newProductTitle"></h2>
                    <div className="newproductItem">
                        <label htmlFor="file">Image</label>
                        <input type='file' id="file" />
                    </div>
                    <div className="newproductItem">
                        <label htmlFor="">Name</label>
                        <input type='text' placeholder='Apple airpod' />
                    </div>
                    <div className="newproductItem">
                        <label htmlFor="">Stock</label>
                        <input type='text' placeholder='yes' />
                    </div>
                    <div className="newproductItem">
                        <label htmlFor="">Active</label>
                        <select name="active" id="active" className="newProductActive" >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button className="createButton">Create</button>
                </div>


            </div>
        </div>
    )
}

export default NewProduct