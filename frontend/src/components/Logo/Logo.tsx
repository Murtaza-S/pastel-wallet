import React from 'react'
import { FireFilled } from '@ant-design/icons'

import styles from './Logo.module.css'

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoIcon}>
        <FireFilled />
      </div>
    </div>
  )
}

export default Logo
