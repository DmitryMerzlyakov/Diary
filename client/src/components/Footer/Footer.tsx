import s from './footer.module.scss'

const Footer = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={s.footer}>
      <p className={s.text}>Мой дневничок</p>
      <button className={s.scroll} onClick={handleScroll}>
        Наверх ↑
      </button>
    </div>
  )
}

export default Footer
