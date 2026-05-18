import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
    return (
        <div className='home-page'>
            {/* <h1>https://fakestoreapi.com/products</h1>
            <h1>http://localhost:4000/products</h1> */}
            <img src="../images/background2.png" alt="" />
            <button onClick={()=>navigate('/adminportal/products')}>Explore More</button>
        </div>
    )
}

export default Home
