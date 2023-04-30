import React, { useState } from 'react'
import './user.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import { rows } from "../../userData"
import { Link } from 'react-router-dom';
const UserList = () => {
const [data, setData] = useState(rows);

const handleDelete=(id)=>{

   setData(data.filter(item=> item.id !== id)) 

}


    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'user', headerName: 'Username', width: 230, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,

        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            sortable: false,
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='userAction'>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        
                            <GridDeleteIcon className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
                    
                    </div>
                )
            }

        }
    ];

    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
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

export default UserList
