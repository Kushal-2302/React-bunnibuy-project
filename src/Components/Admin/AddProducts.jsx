import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProducts = () => {
  let navigate = useNavigate()
  let [formData, setFormData] = useState({
    title: "",
    price: undefined,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: undefined,
      count: undefined,
    },
  });

  let handleChange = (e) => {
    let { name , value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  let handleRating = (e) => {
    let { name , value } = e.target;

    setFormData({
      ...formData,
      rating: {
        ...formData.rating,
        [name]:value,
      }
    })
    
  }
  let handleAdd = (e) => {
    e.preventDefault();
    // console.log(formData)
    axios.post('http://localhost:4000/products',formData)
    toast.success("Product is added")
    navigate('/adminportal/products')
    window.location.reload()
  }
  
  return (
    <>
      <div className="add-products">
        <h1>Add Products</h1>
        <div className="formbox">
          <form action="" onSubmit={handleAdd}>
            <div className="inputfields">
              <input 
                  type="text" 
                  placeholder="Enter Title" 
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  />
              
                <input 
                  type="number" 
                  placeholder="Enter Price" 
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
              />
              
              <input 
                  name="text"
                  placeholder="Enter Description" 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  />
              <select 
                  name="category" 
                  value={formData.category}
                  onChange={handleChange}
                  >
                <option value="">---Select Category---</option>
                <option value="men's clothing">Mens Clothing</option>
                <option value="women's clothing">Womens Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewellery</option>
              </select>
              <input 
                  type="text" 
                  placeholder="Enter Image URL" 
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  />
              
                <input 
                  type="number" 
                  placeholder="Enter Rating" 
                  name="rate"
                  value={formData.rating.rate}
                  onChange={handleRating}
                  />
              
              
                <input 
                  type="number" 
                  placeholder="Enter Count" 
                  name="count"
                  value={formData.rating.count}
                  onChange={handleRating}
               />
              
              
            </div>

            <div className="btn">
                <button >Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
