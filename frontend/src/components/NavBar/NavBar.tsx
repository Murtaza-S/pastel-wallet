import React from 'react'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'

import Logo from '../Logo/Logo'
import MenuList from '../MenuList/MenuList'
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton'

import { isDark } from '../../store/theme/selector'

import styles from './NavBar.module.css'

const { Sider } = Layout

const NavBar: React.FC = () => {
  const darkTheme = useSelector(isDark)

  return (
    <Layout>
      <Sider className={styles.sideBar} theme={darkTheme ? 'dark' : 'light'}>
        <Logo />
        <MenuList />
        <ToggleThemeButton />
      </Sider>
    </Layout>
  )
}

export default NavBar
