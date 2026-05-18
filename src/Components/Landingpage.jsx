import React, { useState } from 'react'
import AdminLogin from './Admin/AdminLogin';
import UsersLogin from './Users/UsersLogin';

const Landingpage = () => {
    let [bool, setBool] = useState(true);
    
    return (
        <div className='landing-page'>
            <h1>Welcome to BunniBuy</h1>

            <div className="container">
                <div className="btnbox">
                    <button onClick={()=>setBool(!bool)} className={bool ? 'lft' : 'ryt'}>
                        {bool ? 'Admin Login' : 'Users Login'}
                    </button>
                </div>
                 <div className="formbox">
                    {bool ? <AdminLogin/>  : <UsersLogin/>}
                </div>
            </div>
        </div>
    )
}

export default Landingpage
