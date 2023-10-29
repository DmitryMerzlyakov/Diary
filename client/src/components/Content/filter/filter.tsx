import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { setSort } from '../../../store/slice/sliceForRender'
import { useGetRepordsQuery } from '../../../store/servises/api'
import { Repord } from '../../../types'

import s from './filter.module.scss'
import NewAct from '../../../assets/NewAct.png'
import NewDes from '../../../assets/NewDes.png'
import OldAct from '../../../assets/OldAct.png'
import OldDes from '../../../assets/OldDes.png'

const Filter = () => {
  const { data } = useGetRepordsQuery('')

  const dispatch = useAppDispatch()
  const sortOld = useAppSelector((state) => state.render.sortOld)
  const sortNew = useAppSelector((state) => state.render.sortNew)

  const [activeNew, setActiveNew] = useState<boolean>(false)
  const [activeOld, setActiveOld] = useState<boolean>(false)
  const [disabledOld, setDisabledOld] = useState<boolean>()
  const [disabledNew, setDisabledNew] = useState<boolean>()

  // const handleSortName = () => {
  //   sortData.push(
  //     ...isData.sort((a: Order, b: Order) => (a.name > b.name ? 1 : -1))
  //   )
  //   setSort(!sort)
  // }

  // const handleSortDate = () => {
  //   sortData.push(
  //     ...isData.sort((a: Order, b: Order) => (a.date > b.date ? 1 : -1))
  //   )
  //   setSort(!sort)
  // }

  // const handleSortId = () => {
  //   sortData.push(...isData.sort((a: Order, b: Order) => a.id - b.id))
  //   setSort(!sort)
  // }

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
