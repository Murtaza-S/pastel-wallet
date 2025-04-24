import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { Button } from 'antd'

import { toggleTheme } from '../../store/theme/reducer'
import { isDark } from '../../store/theme/selector'
import styles from './ToggleThemeButton.module.css'

const ToggleThemeButton: React.FC = () => {
  const dispatch = useDispatch()
  const darkTheme = useSelector(isDark)

  return (
    <div className={styles.toggleThemeButton}>
      <Button onClick={() => dispatch(toggleTheme())}>
        {darkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
      </Button>
    </div>
  )
}

export default ToggleThemeButton
