import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

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

    let handleviewmore = (productId) => {
        navigate(`/adminportal/viewmore/${productId}`)
    }
    // console.log(products)

    let filterCat = ["All" , "men's clothing" , "women's clothing" , "electronics" , "jewelery"]
    let [categoryData , setCategoryData] = useState([])
    let handleFilter = (e) => {
        let btnText = e.target.innerText;

        let filteredArray = products.filter((elem) => {
            return (elem.category === btnText)
        })
        if(btnText === 'All'){
            setCategoryData(products);
        }else{
            setCategoryData(filteredArray);
        }
    }

    return (
        <>
            <div className="products">
                <h1>Products</h1>
                <button onClick={()=>navigate('/adminportal/addproducts')} className='add-btn'><p>Add Products</p> <span><AddIcon/></span></button>
                <div className="filter-btn">
                    {filterCat.map((elem , index)=>{
                        return (
                            <li key={index}>
                                <button onClick={handleFilter}>{elem}</button>
                            </li>
                        )
                    })}
                </div>
                <div className="container">
                    {(categoryData).map((elem, index)=>{
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
                                    <button className='view' onClick={()=>handleviewmore(id)}><p>View More</p>&nbsp;<DescriptionIcon/></button>
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
