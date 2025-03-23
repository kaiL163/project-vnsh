import React from 'react'
import s from './Register.module.scss'
import { FormProvider, useForm } from 'react-hook-form'

export const Register = () => {

  const methods = useForm({
    defaultValues:{
      email: '',
      password: '',
      name: '',
      phone: ''
    },
    mode: 'onBlur'
  })

  const { register, handleSubmit, formState } = methods

  const onSubmit = handleSubmit((values) => {
    alert(values)
  })

  return (
    <>
      <FormProvider {...methods}>
        <div className={s.wrapper}>

            <input {...register('name', {
              required: "Это поле обязательное",
              pattern: {
                 value: /^[A-Za-z]+$/i,
                 message: 'Ошибка'
              }
            })}  placeholder="Name"/>
            {formState?.errors?.name?.message}

            <input {...register('email', {
              required: "Это поле обязательное"
            })}  placeholder="Email"/>
            {formState?.errors?.email?.message}

            <input {...register('phone', {
              required: "Это поле обязательное"
            })}  placeholder="Phone"/>
            {formState?.errors?.phone?.message}

            <input {...register('password', {
              required: "Это поле обязательное",
              minLength: {
                value: 8,
                message: "Пароль должен быть больше 8 символов."
              }
            })}  placeholder="Password"/>
            {formState?.errors?.password?.message}

            <button onClick={onSubmit}>Submit</button>
        </div>
      </FormProvider>   
    </>
  )
}
