export interface Repord {
  id: number
  title: string
  content: string
  date: Date
}

export type Response = Repord[]

export interface RootState {
  isOn: boolean
}
