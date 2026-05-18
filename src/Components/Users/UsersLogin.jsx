import React from 'react'

const UsersLogin = () => {
    return (
        <>
      <div className="users-login">
        <h2>Users</h2>
        <form>
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>User Login</button>
        </form>
      </div>
    </>
    )
}

export default UsersLogin
