import React, { Fragment, useContext, useState } from 'react'
import logo from "../../images/logo.png"
import { IsMobileContext } from '../../features/IsMobileContext';
import { motion } from "framer-motion";
const Navbar = () => {
  const[activeMenu, setActiveMenu] = useState(false);
  const {isMobile} = useContext(IsMobileContext);
  const links = [
    {id: 1, link:"Home", isActive: true},
    {id: 2, link:"about"},
    {id: 3, link:"movies"},
    {id: 4, link:"Contact"},
  ];
  return (
    <nav>
      <div className='logo'>
        <motion.img src={logo} alt='logoImg' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }} />
      </div>
      {!isMobile && ( <Fragment>
        <div className='menu'>
        <ul>
          {links.map((link, index) => (
            <motion.a key={index} href='#' className={link.isActive? "active" : ""} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}> {link.link}  </motion.a>
          ))}
        </ul>
      </div>
      <motion.div className='btn' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
        <button>Get Started</button>
      </motion.div>
        </Fragment> )}
        {isMobile && (
          <Fragment>
          <motion.div className="bar" onClick={()=> setActiveMenu(!activeMenu)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
            <div></div>
            <div></div>
          </motion.div>
          <div className={`mobile-menu ${activeMenu ? "active" : ""}`}>
            <ul>
              {links.map((link,index) => (
                <motion.a href='#' key={index} className={link.isActive ? "active": ""} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>{link.link}</motion.a>
              ))}
            </ul>
          </div>
          </Fragment>
        )}
    </nav>
  );
};

export default Navbar;
