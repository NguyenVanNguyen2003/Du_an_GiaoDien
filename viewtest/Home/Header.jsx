import React from 'react';
import './css/header.css';
import './css/base.css';
import { FaBell, FaAngleDown, FaBars,FaX } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
      <Link to="/" className='header__icon'>
        <img src='https://www.mioto.vn/static/media/logo-full.ea382559.png' className='header__icon-img'></img>
      </Link>
      <ul className='header__page'>
        <Link to="/about" className='header__page-item'>Về Mioto</Link>
        <li className='header__page-item'>Chuyến đi</li>
        <li className='header__page-item-vertical'></li>
        <label htmlFor="nav-tablet-input" className="nav__bars-icon">
          <i className="header__page-item-login-iconbars">
            <FaBars></FaBars>
          </i>
        </label>
        <input hidden='none' type="checkbox" className="nav__input" id="nav-tablet-input"></input>
        <div id='nav__overlay' className='nav__overlay'>
        <label htmlFor='nav-tablet-input' id='close-overlay'>
          <i className='close-overlay-icon'><FaX></FaX></i>
        
        </label>
        <Link to="/user" className='header__page-item-login-overlay'>
          <div className='header__page-item-login-overlay-avt'> 
          <img src="https://n1-astg.mioto.vn/g/2023/08/19/18/BMEMGCxlBOgS_cMq-XfAnQ.jpg" alt=""></img>
          <h3 className='header__page-item-login-overlay-name'>Nguyễn Văn Nguyên</h3>
          </div>
          <div className='header__page-iten-login-overlay-about'> Về Mioto</div>
          <div className='header__page-iten-login-overlay-go'> Let di go ?</div>
        </Link>
        </div>

        <Link to="/user" className='header__page-item-login'>
          <i className='header__page-item-login-firt'><FaBell></FaBell>
          </i>
          <div className='header__page-item-login-avt'> <img src="https://n1-astg.mioto.vn/g/2023/08/19/18/BMEMGCxlBOgS_cMq-XfAnQ.jpg" alt=""></img></div>
          <h3 className='header__page-item-login-name'>Nguyễn Văn Nguyên</h3>
          <i className='header__page-item-login-last'><FaAngleDown></FaAngleDown></i>
        </Link>
        <div className='header__page-item-logout' >
          <li className='header__page-item-logout-register'>Đăng ký</li>
          <li className='header__page-item-logout-register  header__page-item-logout-register-button'>Đăng nhập</li>
        </div>
      </ul>
    </div>
  )
}

export default Header;
