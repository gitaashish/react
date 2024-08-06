import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useLocation  } from 'react-router-dom';
import Headerlogo from '../../assets/images/head-logo.svg';
import { MainContext } from '../../Context/MainContext';


const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');
  const {headerMenu} = useContext(MainContext)

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        if (scrollTop > lastScrollTop) {
          setScrollDirection('sticky-down');
        } else if (scrollTop < lastScrollTop) {
          setScrollDirection('sticky-up');
        }
      } else {
        setScrollDirection('');
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
     <header className={`header ${scrollDirection} ${isHomePage ? 'header_sticky home_header' : ''}`}>

        <div className="container">
          <div className="logo_col">
            <Link to="/"><img src={Headerlogo} alt="Header Logo" /></Link>
          </div>
          <nav>
            <ul>
              {headerMenu.map((menu)=>{
                  return(
                    <li key={menu.id}><NavLink to={menu.to}>{menu.menuName}</NavLink></li>
                  )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
