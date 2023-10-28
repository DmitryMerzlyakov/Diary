import { Repord } from '../../../types'
import s from './item.module.scss'
import sprite from '../../../assets/sprite.svg'

const Item = ({ content, title, date }: Repord) => {
  const arrDate = date.toString().split(',')

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <h3>{title}</h3>
      </div>
      <div className={s.content}>
        <p>{content}</p>
      </div>
      <div className={s.date}>
        <p className={s.date__content}>
          <svg className={s.svg}>
            <use xlinkHref={`${sprite}#icon-month`}></use>
          </svg>
          <p className={s.date__text}>{arrDate[0]}</p>
        </p>
        <p className={s.date__content}>
          <svg className={s.svg}>
            <use xlinkHref={`${sprite}#icon-time`}></use>
          </svg>
          <p className={s.date__text}>{arrDate[1]}</p>
        </p>
      </div>
    </div>
  )
}

export default Item
