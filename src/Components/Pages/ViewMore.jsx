import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { useNavigate, useParams } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
 import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ViewMore = () => {
    let params = useParams()
    let productId = params.id
    // console.log(productId)

    let [oneProduct , setOneProduct] = useState({})
    let navigate = useNavigate()

    let fetchApi = async () => {
        let apidata = await axios.get(`http://localhost:4000/products/${productId}`)
        setOneProduct(apidata.data)
    }
    useEffect(()=>{
        fetchApi()
    },[])
    console.log(oneProduct);

    let handleback = () => {
        navigate(`/adminportal/products`)
    }

    let {id , title , price , description , category , image , rating} = oneProduct;

    let handledelete = () => {
        let bool = window.confirm('Do you want to delete this product')
        if(bool){
            axios.delete(`http://localhost:4000/products/${id}`);
            // alert('Product is Deleted');
            toast.success('Product is Deleted')
            navigate(`/adminportal/products`)
        } else {
            toast.error('Product is not Deleted')
        }
    }

    let addToCart = () => {
        let bool = window.confirm("Do you want to add this product to cart items...");
        if(bool){
             axios.post(`http://localhost:4000/cartitems`,oneProduct)
             toast.success(`Product is Added to Cart`)
        } else {
            toast.info(`Product is not added`)
        }
       
    }
    
    return (
        <div className="viewmore">
            <h1>Product Info</h1>
            <div className="card">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="desc">
                    <button onClick={()=>handleback()} className='back-btn'><span><ArrowBackIosIcon/></span> Back</button>
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                    <div className="price">Rs.  {(price * 95).toFixed(2)}/-</div>
                    <div className="cat">Category : {category}</div>
                    <div className="rating">{rating?.rate} <span><StarIcon/></span> </div>
                    <div className="count">{rating?.count}</div>
                    <button className='dlt' onClick={()=>handledelete()}>Delete <span><DeleteIcon/></span></button>
                    <button onClick={()=>addToCart()}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ViewMore
