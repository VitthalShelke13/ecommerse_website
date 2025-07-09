import React from 'react'
import { NavLink,Link } from 'react-router-dom';
import { useAuth } from '../../contextapi/contextAuth';
const Header=()=>{
  const [Auth,SetAuth] = useAuth()
  const logoutHandler=()=>{
    SetAuth({
      ...Auth, user:null,jwttoken:''
    })
    localStorage.removeItem('auth')
  }
    return(
        <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <Link className="navbar-brand"> 🛒ECCOMERSE APP </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to='/category'>Category</NavLink>
        </li>
        {!Auth.user ?(<>
        <li className="nav-item">
          <NavLink className="nav-link" to='/register' >Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/login' >Login</NavLink>
        </li>
        </>):(<>
          <li className="nav-item">
          <NavLink className="nav-link" onClick={logoutHandler} to='/login' >Logout </NavLink>
        </li>
        </>)
        }
        <li className="nav-item">
          <NavLink className="nav-link" to='/cart'>Cart(0)</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" 
          data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" href="#">Action</NavLink></li>
            <li><NavLink className="dropdown-item" href="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" href="#">Something else here</NavLink></li>
          </ul>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}
export default Header;