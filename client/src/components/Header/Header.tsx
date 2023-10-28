import { Button } from '../Button'

import s from './header.module.scss'
import logo from '../../assets/Logo.png'
import { useAppDispatch } from '../../hooks'
import { setVisible } from '../../store/slice/sliceForRender'

const Header = () => {
  const dispatch = useAppDispatch()

  const handleOpenPopUp = () => {
    dispatch(setVisible({ visible: true }))
  }

  return (
    <header className={s.wrapper}>
      <img src={logo} />
      <button className={s.button} onClick={handleOpenPopUp}>
        НАПИСАТь
      </button>
    </header>
  )
}

export default Header
