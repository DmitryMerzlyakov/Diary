import { Header } from '../components/Header'
import { Content } from '../components/Content'

import s from './main.module.scss'
import { Add } from '../components/AddPopUp'
import { Footer } from '../components/Footer'
import { useGetByIdRepordsQuery } from '../store/servises/api'

const Main = () => {
  const { data } = useGetByIdRepordsQuery(4)

  console.log(data)

  return (
    <div className={s.main}>
      <Header />
      <Content />
      <Add />
      <Footer />
    </div>
  )
}

export default Main
