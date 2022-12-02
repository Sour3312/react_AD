import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ProductList = () => {
    const [data, setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'EDGE_ID', width: 90 },
        {
            field: "product",
            headerName: "City",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="not found" />
                        {params.row.name}
                    </div>
                );
            },
        },
        { field: 'stock', headerName: 'Country', width: 200 },
        { field: 'status', headerName: 'Latitude', width: 120 },
        { field: 'price', headerName: 'Longitude', width: 160 },
        {
            field: "action",
            headerName: "Postcode",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];


    return (
        <div className='productList'>
            <DataGrid style={{ height: 70 + "vh", width: '100%' }}
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default ProductList
