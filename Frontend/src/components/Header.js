import React from 'react'
import Logo from '../img/logo.png'
import GreenLogo from '../img/green-logo.png'
import { NavLink } from 'react-router-dom'


export default function Header() {
    return (
        <>
            <header className='header'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand white-logo" to="/">
                            <img src={Logo} alt="Logo" />
                        </NavLink>
                        <NavLink className="navbar-brand green-logo" to="/">
                            <img src={GreenLogo} alt="Logo" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/buy">Buy</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/sell">Sell</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/rent">Rent</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/auctions">Auctions</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/ruma">RUMA</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/mortage">Mortgage Calculator</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/advertise">Advertise</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex search_box" role="search">
                                <div className="search_zip position-relative">
                                    <input className="form-control me-2" type="zipfinder" placeholder="City/Zip Code" aria-label="City/Zip Code " />
                                    <span>
                                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" >
                                            <path d="M15.364 15.3639L9 21.7279L2.636 15.3639C1.37734 14.1052 0.520187 12.5016 0.172928 10.7558C-0.17433 9.00995 0.00390685 7.20035 0.685099 5.55582C1.36629 3.91129 2.51984 2.50569 3.99988 1.51677C5.47992 0.527838 7.21998 0 9 0C10.78 0 12.5201 0.527838 14.0001 1.51677C15.4802 2.50569 16.6337 3.91129 17.3149 5.55582C17.9961 7.20035 18.1743 9.00995 17.8271 10.7558C17.4798 12.5016 16.6227 14.1052 15.364 15.3639ZM9 10.9999C9.53044 10.9999 10.0391 10.7892 10.4142 10.4141C10.7893 10.0391 11 9.53035 11 8.99992C11 8.46949 10.7893 7.96078 10.4142 7.58571C10.0391 7.21064 9.53044 6.99992 9 6.99992C8.46957 6.99992 7.96086 7.21064 7.58579 7.58571C7.21072 7.96078 7 8.46949 7 8.99992C7 9.53035 7.21072 10.0391 7.58579 10.4141C7.96086 10.7892 8.46957 10.9999 9 10.9999Z" fill="#02919A" />
                                        </svg>
                                    </span>
                                </div>
                            </form>
                            <div className="sign_in_btn">
                                <a href="/login" className='btn'>Sign In</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}
