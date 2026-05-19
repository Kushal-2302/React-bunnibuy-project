import React, { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

const AddUsers = () => {
    let [formdata , setFormdata] = useState({
        username : "",
        contact : "",
        email : "",
        password : "",
        date : ""
    })

    let handleInput = (e) => {
        let { name , value } = e.target;
        // console.log(name , value)

        setFormdata({
            ...formdata,
            [name] : value
        })
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formdata)
        axios.post('http://localhost:4000/users',formdata)
        toast.success("Registered Successfully")
        window.location.reload()
    }
    return (
        <>
            <div className="add-users">
                <h1>Users Registration Form</h1>
                <div className="formbox">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder='Enter UserName'
                            name='username'
                            value={formdata.username}
                            onChange={handleInput}
                            required
                        />
                        <input 
                            type="tel" 
                            pattern='{6-9}{1}{0-9}{9}' 
                            placeholder='Enter Contact Number'
                            name='contact'
                            value={formdata.contact}
                            onChange={handleInput}
                            required
                        />
                        <input 
                            type="email" 
                            placeholder='Enter Email'
                            name='email'
                            value={formdata.email}
                            onChange={handleInput}
                            required
                        />
                        <input 
                            type="password" 
                            placeholder='Enter Password'
                            name='password'
                            value={formdata.password}
                            onChange={handleInput}
                            required
                        />
                        <input 
                            type="date" 
                            name='date'
                            value={formdata.date}
                            onChange={handleInput}
                            required
                        />

                        <button>Add Users</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default AddUsers
