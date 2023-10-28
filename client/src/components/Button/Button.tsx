import s from './button.module.scss'

interface IProps {
  text: string
}

const Button = ({ text }: IProps) => {
  const log = () => {
    console.log('object')
  }

  return (
    <button className={s.button} onClick={log}>
      {text}
    </button>
  )
}

export default Button
