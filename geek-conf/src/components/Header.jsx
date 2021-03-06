import React from 'react';
import Logo from '../images/ac-geek-logo.png';
//importar CSS
import './Styles/HeaderStyles.css'

class Header extends React.Component{
    render(){
        return(
            <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="HeaderImage" src={Logo} alt="Academia Geek Logo"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#main">La conferencia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#speakers">Los oradores</a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link" href="#place-time">¿Dónde y cuándo es?</a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link" href="#conviertete-en-orador">Conviértete en orador</a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link text-ac-geek" href="#" data-toggle="modal" data-target="#modalCompra">Comprar tickets</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}

export default Header;
