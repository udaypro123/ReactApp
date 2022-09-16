import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className="container" id='nav' >
                <div className="row" >
                    <div className="col-md-10 col-xm-10 m-3"  >
                        <Link className='me' to="/">Home</Link>
                        <Link className='me' to="about">About </Link>
                        <Link className='me' to="services"> Services</Link>
                        <Link className='me' to="contact"> Contact us</Link>



                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;
