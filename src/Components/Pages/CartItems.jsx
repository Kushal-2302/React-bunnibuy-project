import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const CartItems = () => {

    let [cartProduct , setCartProduct] = useState({})
    let navigate = useNavigate()

    let fetchApi = async () => {
        let apidata = await axios.get(`http://localhost:4000/cartitems`)
        setCartProduct(apidata.data)
        
    }
    useEffect(()=>{
        fetchApi()
    },[])
    console.log(cartProduct)
    return (
        <div>
            <h1>Cart Items</h1>
            <div>
                {cartProduct.map((elem)=>{
                let {title , description , image} = elem;
                // console.log(elem)

                return (
                    <>
                        <h1>{title}</h1>
                    </>
                )
            })}
            </div>
        </div>
    )
}

export default CartItems
