import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  return (
    <div>
        {isLoading ? (<p>Loading...</p>) : (isAuthenticated ?(     <button onClick={logout}>Logout</button>) : (<button onClick={loginWithRedirect}>Login</button>)) }
    </div>
  )
}

export default Login