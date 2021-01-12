import React from 'react'
import { Link, Router } from "react-router-dom";
import './Navigation.css'

function Navigation() {
    return (
        <div className="header_nav">
            <div class="header_nav_left">
                <Link to="/">
                    <img className="header_logo"
                     src="https://www.acko.com/wp-content/uploads/2020/06/acko-logo.png" alt="" />
                </Link>
                <Link to="/products" className="header_link" >
                    <h6>Products</h6>
                </Link>
                <Link to="/articles" className="header_link">
                    <h6>Articles</h6>
                </Link>

                
            </div>
            <div className="header_nav_right">
                    <div className="login_box">
                        <span>Claim, Edit, Renew & more</span>
                        <Link to="/login" className="header_link">
                                <button type="submit" className="btn_login">Login</button>
                        </Link>
                    </div>

                <Link to="/help" className="header_link">
                    <h6>Help</h6>
                </Link>

                
            </div>
            
            
        </div>
    )
}

export default Navigation
