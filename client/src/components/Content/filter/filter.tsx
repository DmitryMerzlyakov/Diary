import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setSort } from '../../../store/slice/sliceForRender'

import s from './filter.module.scss'
import NewAct from '../../../assets/NewAct.png'
import NewDes from '../../../assets/NewDes.png'
import OldAct from '../../../assets/OldAct.png'
import OldDes from '../../../assets/OldDes.png'

const Filter = () => {
  const dispatch = useAppDispatch()
  const sortOld = useAppSelector((state) => state.render.sortOld)
  const sortNew = useAppSelector((state) => state.render.sortNew)

  const [activeNew, setActiveNew] = useState(false)
  const [activeOld, setActiveOld] = useState(false)
  const [disabledOld, setDisabledOld] = useState<boolean>()
  const [disabledNew, setDisabledNew] = useState<boolean>()

  const handleFilterNew = () => {
    setActiveNew((prev: boolean) => !prev)
    if (activeNew === true) {
      setDisabledOld(false)
    } else {
      setDisabledOld(true)
    }
    dispatch(setSort({ sortNew: !sortNew, sortOld: false }))
  }

  const handleFilterOld = () => {
    setActiveOld((prev: boolean) => !prev)
    if (activeOld === true) {
      setDisabledNew(false)
    } else {
      setDisabledNew(true)
    }
    dispatch(setSort({ sortOld: !sortOld, sortNew: false }))
  }

  return (
    <div className={s.wrapper}>
      <button
        className={activeNew ? s.buttonAct : s.buttonDes}
        onClick={handleFilterNew}
        disabled={disabledNew}
      >
        {activeNew ? <img src={NewAct} /> : <img src={NewDes} />}
        Сначала новые
      </button>

      <button
        className={activeOld ? s.buttonAct : s.buttonDes}
        onClick={handleFilterOld}
        disabled={disabledOld}
      >
        {activeOld ? <img src={OldAct} /> : <img src={OldDes} />}
        Сначала старые
      </button>
    </div>
  )
}

export default Filter
