import React, { useState } from 'react'
import { userRows } from '../../data'
import { DataGrid } from '@mui/x-data-grid';
import './UserList.css'
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { PartyMode } from '@mui/icons-material';

export default function UserList() {

  const [userDatas, setUserDatas] = useState(userRows)

  const userDelete = (id) =>{
    setUserDatas(userDatas.filter(user => user.id !== id))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'User',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <Link to='/' className='link'>
            <div className="UserListUser">
              <img src={params.row.avatar} className='UserListImg' />
              {params.row.username}
            </div>
          </Link>
        )
      }

    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerNaem: 'Status',
      width: 120
    },
    {
      field: 'transaction',
      headerName: 'transaction',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="actionUserContainer">
            <Link to={`/user/${params.row.id}`} className='link'>
              <button className='UserListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon
              className='UserListDelete'
              onClick={() => userDelete(params.row.id)}
            />
          </div>

        )
      }
    }


  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={userDatas}
        columns={columns}
        pageSizeOptions={[3, 5, 10, 15, 25, 50, 100]}
      />
    </div>
  )
}
