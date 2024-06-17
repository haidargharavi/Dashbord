import React, { useState } from 'react'
import { products } from '../../data'
import { DataGrid } from '@mui/x-data-grid';
import './Products.css'
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { PartyMode } from '@mui/icons-material';

export default function Productss() {

  const [proDatas, setProDatas] = useState(products)

  const productDelete = (id) =>{
    setProDatas(proDatas.filter(product => product.id !== id))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'User',
      headerName: 'product-naem',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to='/' className='link'>
            <div className="UserListUser">
              <img src={params.row.avatar} className='UserListImg' />
              {params.row.title}
            </div>
          </Link>
        )
      }

    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
      renderCell: (params)=>{
        console.log(params)
        return(
          "$" + params
        )
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="actionUserContainer">
            <Link to={`/products/${params.row.id}`} className='link'>
              <button className='UserListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='UserListDelete'
              onClick={() => productDelete(params.row.id)}
            />
          </div>

        )
      }
    }


  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={proDatas}
        columns={columns}
        pageSizeOptions={[3, 5, 10, 15, 25, 50, 100]}
        checkboxSelection
      />
    </div>
  )
}

