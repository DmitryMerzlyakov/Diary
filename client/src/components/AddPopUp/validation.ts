export const titleValidation = {
  required: 'Обязательноe поле',
  validate: (value: string) => {
    if (value.length < 3) {
      return 'Минимум 3 символов'
    }

    if (value.length > 200) {
      return 'Максимум 200 символов'
    }

    return true
  }
}

export const contentValidation = {
  required: 'Обязательное поле',
  validate: (value: string) => {
    if (value.length > 2000) {
      return 'Максимум 2000 символов'
    }

    return true
  }
}
