import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  let [formData, setFromData] = useState({ email: "", password: "" });
  let [err, setErr] = useState("");
  

  let handleInput = (e) => {
    e.preventDefault();

    //todo : Collecting input values and updating values of formData object
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  let navigate = useNavigate()  //todo : It is a hook which is present in react-router-don, It is use to navigate to next component & it returns navigatefunction
  let handleSubmit = (e) => {
    e.preventDefault();
    //    console.log(formData)

    //todo :  : Descturcting of formdata which is collected  the values from input fields
    let { email, password } = formData;

    //todo : create credentials Object to store email & password
    let credentials = {
      admin_mail: "admin@gmail.com",
      admin_pswd: "Admin@123",
    };

    //todo : Destructring the credentials objects
    let { admin_mail, admin_pswd } = credentials;

    //todo: check inputvalues & credencials are matching or not
    let errDesign = {
        color : "red",
        textAlign : 'center'
    }

    if (email === admin_mail) {
      if (password === admin_pswd) {
        setErr('')
        navigate('/adminportal')
        // alert("Welcome");
        toast.success("Login Success");
        localStorage.setItem("users" , JSON.stringify(credentials))
      } else {
        setErr(<div style={errDesign}>Invalid Password</div>);
        toast.error("Password is Invalid")
      }
    } else {
      setErr(<div style={errDesign}>Invalid Email</div>);
    }
  };

  return (
    <>
      <div className="admin-login">
        <h2>Admin</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
            value={formData.email}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleInput}
            value={formData.password}
            required
          />

          <div>{err}</div>

          <button>Admin Login</button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
