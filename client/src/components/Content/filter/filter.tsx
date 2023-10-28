import { useState } from 'react'
import { useAppDispatch } from '../../../hooks'
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

  const [activeNew, setActiveNew] = useState(false)
  const [activeOld, setActiveOld] = useState(false)

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
    data?.sort((a: Repord, b: Repord) => (a.date > b.date ? 1 : -1))
    dispatch(setSort({ sort: true }))
    setActiveNew(true)
    setActiveOld(false)
  }

  const handleFilterOld = () => {
    dispatch(setSort({ sort: true }))
    setActiveOld(true)
    setActiveNew(false)
  }

  return (
    <div className={s.wrapper}>
      <button
        className={activeNew ? s.buttonAct : s.buttonDes}
        onClick={handleFilterNew}
      >
        {activeNew ? <img src={NewAct} /> : <img src={NewDes} />}
        Сначала новые
      </button>

      <button
        className={activeOld ? s.buttonAct : s.buttonDes}
        onClick={handleFilterOld}
      >
        {activeOld ? <img src={OldAct} /> : <img src={OldDes} />}
        Сначала старые
      </button>
    </div>
  )
}

export default Filter
