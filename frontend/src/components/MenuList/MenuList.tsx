import React from 'react'
import { useSelector } from 'react-redux'
import { Menu } from 'antd'
import { HomeOutlined, SettingOutlined } from '@ant-design/icons'

import { isDark } from '../../store/theme/selector'

import styles from './MenuList.module.css'

const MenuList: React.FC = () => {
  const darkTheme = useSelector(isDark)

  return (
    <Menu
      className={styles.menuBar}
      mode="inline"
      theme={darkTheme ? 'dark' : 'light'}
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
    </Menu>
  )
}

export default MenuList
