import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <span>{user?.email}</span>
            <div className="nav-link">
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button onClick={logOut} className='btn-out'>Log Out</button>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign up</Link>
                        </>}

            </div>
        </nav>
    );
};

export default Header;