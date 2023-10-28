import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setVisible } from '../../store/slice/sliceForRender'
import { useAddNewRepordMutation } from '../../store/servises/api'
import { titleValidation, contentValidation } from './validation'

import sprite from '../../assets/sprite.svg'
import s from './add.module.scss'

interface IForm {
  title: string
  content: string
  date: Date
}

const Add = () => {
  const dispatch = useAppDispatch()
  const visible = useAppSelector((state) => state.render.visible)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IForm>({ mode: 'onBlur' })

  const [data, setData] = useState({
    title: '',
    content: '',
    date: Date()
  })

  const date = new Date()

  const f = new Intl.DateTimeFormat('ru-ru', {
    dateStyle: 'short',
    timeStyle: 'short'
  })

  const [createRepord] = useAddNewRepordMutation()

  const onSubmit = async () => {
    await createRepord(data)
    dispatch(setVisible({ visible: false }))
  }

  const handleClosePopUp = () => {
    dispatch(setVisible({ visible: false }))
  }

  useEffect(() => {
    reset()
  }, [visible])

  return (
    <div className={`${visible ? s.disable : s.active}`}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '95%'
          }}
        >
          <p className={s.header}>Новая запись</p>
          <button className={s.close} onClick={handleClosePopUp}>
            <svg>
              <use xlinkHref={`${sprite}#icon-close`}></use>
            </svg>
          </button>
        </div>
        <div className={s.box}>
          <div className={s.box__item}>
            <div className={s.error}>
              <p className={s.box__title}>Заголовок</p>
              {errors?.title && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg className={s.svg}>
                    <use xlinkHref={`${sprite}#icon-error`}></use>
                  </svg>
                  {errors?.title?.message}
                </div>
              )}
            </div>
            <Controller
              control={control}
              name="title"
              render={() => (
                <input
                  className={s.box__input}
                  {...register('title', titleValidation)}
                  id="title"
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              )}
            />
          </div>
          <div className={s.box__item}>
            <div className={s.error}>
              <p className={s.box__title}>Дата</p>
              {errors?.date && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg className={s.svg}>
                    <use xlinkHref={`${sprite}#icon-error`}></use>
                  </svg>
                  {errors?.date?.message}
                </div>
              )}
            </div>
            <Controller
              control={control}
              name="date"
              render={() => (
                <input
                  className={s.box__date}
                  {...register('date', {
                    required: 'Обязательное поле'
                  })}
                  id="date"
                  placeholder={'Введите дату в формате:' + ' ' + 'ДД.ММ.ГГГГ'}
                  onChange={() => setData({ ...data, date: f.format(date) })}
                />
              )}
            />
          </div>
        </div>
        <div>
          <div className={s.box__labelInput}>
            <div className={s.error}>
              <p className={s.box__title}>Заметка</p>
              {errors.content && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg className={s.svg}>
                    <use xlinkHref={`${sprite}#icon-error`}></use>
                  </svg>
                  {errors?.content?.message}
                </div>
              )}
            </div>
          </div>
          <Controller
            control={control}
            name="content"
            render={() => (
              <textarea
                className={s.box__textarea}
                {...register('content', contentValidation)}
                id="content"
                onChange={(e) => setData({ ...data, content: e.target.value })}
              />
            )}
          />
        </div>

        <button type="submit" className={s.button}>
          Поделиться наболевшим
        </button>
      </form>
    </div>
  )
}

export default Add
