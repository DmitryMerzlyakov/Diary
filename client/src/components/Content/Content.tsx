import { Item } from './item'
import { Filter } from './filter'

import { useGetRepordsQuery } from '../../store/servises/api'
import { useState, useEffect } from 'react'
import { Repord } from '../../types'
import { useAppSelector } from '../../hooks'

import s from './content.module.scss'

const Content = () => {
  const { data, isLoading, error } = useGetRepordsQuery('')

  const [container, setContainer] = useState<Repord[]>([])
  const [repords, setRepords] = useState<Repord[]>([])
  const [lastItem, setLastItem] = useState(6)

  const sortOld = useAppSelector((state) => state.render.sortOld)
  const sortNew = useAppSelector((state) => state.render.sortNew)

  useEffect(() => {
    data && !error && setContainer(data)
    data && !error && setRepords(data)
  }, [isLoading])

  useEffect(() => {
    if (sortNew === true) {
      const arrSort = [...container]
      setRepords(arrSort.sort((a, b) => (a.date < b.date ? 1 : -1)))
    } else {
      setRepords(container)
    }
  }, [sortNew])

  useEffect(() => {
    if (sortOld === true) {
      const arrSort = [...container]
      setRepords(arrSort.sort((a, b) => (a.date > b.date ? 1 : -1)))
    } else {
      setRepords(container)
    }
  }, [sortOld])

  const handleShowMore = () => {
    setLastItem(lastItem * 2)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h1 className={s.header__text}>Мой дневничок</h1>
        <Filter />
      </div>
      <div className={s.content}>
        {repords.slice(0, lastItem).map((item: Repord) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            date={item.date}
          />
        ))}
      </div>
      <button className={s.button} onClick={handleShowMore}>
        показать больше
      </button>
    </div>
  )
}

export default Content
