import React, { useState } from 'react'
import "./productList.scss"
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import {productrows } from "../../productData"
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [data, setData] = useState(productrows);

const handleDelete=(id)=>{

   setData(data.filter(item=> item.id !== id)) 

}

    
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'product', headerName: 'Productname', width: 230, renderCell: (params) => {
                return (
                    <div className='productListUser'>
                        <img src={params.row.img} alt="" />
                        {params.row.productname}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,

        },
        {
            field: 'price',
            headerName: 'Price',
            sortable: false,
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='productAction'>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        
                            <GridDeleteIcon className='productListDelete' onClick={()=>handleDelete(params.row.id)} />
                    
                    </div>
                )
            }

        }
    ];
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar/>
                <div>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        // paginationModel={{  pageSize: 7 }}
                        pageSize={5}
                        checkboxSelection
                    />
                </div>

            </div>


        </div>
    )
}

export default ProductList