import React from 'react'
import styles from './logo.module.css'
import logo from '../../images/logo.png'

const Logo = () => {
  return (
    <div>
       <div className={styles.logoContenedor}>
      <img src={logo} className={styles.logo} alt="" />
     </div>
    </div>
  )
}

export default Logo
