import { Item } from './item'
import { Filter } from './filter'

import { useGetRepordsQuery } from '../../store/servises/api'
import { useState, useEffect } from 'react'
import { Repord } from '../../types'

import s from './content.module.scss'

const Content = () => {
  const { data, isLoading, error } = useGetRepordsQuery('')

  const [container, setContainer] = useState<Repord[] | []>([])
  const [lastItem, setLastItem] = useState(3)

  useEffect(() => {
    data && !error && setContainer(data)
  }, [isLoading])

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
        {container.slice(0, lastItem).map((item: Repord) => (
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
