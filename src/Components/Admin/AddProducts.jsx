import React, { useState } from "react";

const AddProducts = () => {
  let [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handleAdd = (e) => {
    e.preventDefault();

    let productDetails = {
        title : e.target[0].value,
        price : e.target[1].value,
        description : e.target[2].value,
        image : e.target[3].value,
        rating : {
            rate : e.target[4].value,
            count : e.target[5].value,
        }

    }
    console.log(productDetails)
  }
  
  return (
    <>
      <div className="add-products">
        <h1>Add Products</h1>
        <div className="formbox">
          <form action="" onSubmit={handleAdd}>
            <div className="inputfields">
              <input type="text" placeholder="Enter Title" />
              <input type="text" placeholder="Enter Price" />
              <input type="text" placeholder="Enter Description" />
              <select name="" id="">
                <option value="">---Select Category---</option>
                <option value="men's clothing">Mens Clothing</option>
                <option value="women's clothing">Womens Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewellery</option>
              </select>
              <input type="text" placeholder="Enter Image URL" />
              <input type="text" placeholder="Enter Rating" />
              <input type="text" placeholder="Enter Count" />
              
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
