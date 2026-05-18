import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    let [products , setProducts] = useState([])
    let navigate = useNavigate();
    let fetchApi = async () => {
        let respData =  await axios.get('http://localhost:4000/products')
        setProducts(respData.data)
    }
    useEffect(()=>{
        fetchApi()
    },[])

    let handlevuewmore = (productId) => {
        navigate(`/adminportal/viewmore/${productId}`)
    }
    console.log(products)
    return (
        <>
            <div className="products">
                <h1>Products</h1>

                <div className="container">
                    {products.map((elem, index)=>{
                        let {id , image , title, category} = elem
                        return (
                            <div className="card" key={index}>
                                <div className="cat">
                                    <p>{category}</p>
                                    <button><FavoriteBorderIcon/></button>
                                </div>
                                <div className="image"><img src={image} alt="No Image" /></div>
                                <div className="title">{title}</div>
                                <div className="btns">
                                    <button className='view' onClick={()=>handlevuewmore(id)}><p>View More</p>&nbsp;<DescriptionIcon/></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products
