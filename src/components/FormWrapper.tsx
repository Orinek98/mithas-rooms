import {ReactNode }from 'react'

type FormWrapperProps = {
    title: string,
    children: ReactNode
,}

function FormWrapper({title, children} : FormWrapperProps) {
  return (
    <>
        <h1 className='text-center text-3xl font-semibold mb-8'>{title}</h1>
        <div className='grid justify-center'>{children}</div>
    </>
  )
}

export default FormWrapper