'use client'

import Form from '@/components/Form';
import Status from '@/components/Status';
import React, { useReducer } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
type State = {
  count: number;
  question: string;
  answer: string;
};

type Action = {
  type: string
}

type Inputs = {
  name: string
  email: string
}

export default function page() {
  const initialState: State = { count: 0, question: 'recently what occured?', answer: '' };


  const reducer = (state: State, action: Action) => {
    if (action.type === "add") return { ...state, count: state.count + 1, answer: 'added 1' }
    else if (action.type === "remove") return { ...state, count: state.count - 1, answer: 'removed 1' }
    else return state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const methods = useForm<Inputs>({
    mode: 'onChange', // ✅ so isValid updates on input change
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('FORM DATA:', data)
  }

  return (
    <FormProvider {...methods}>
      <div>
        <div>
          <div className='w-fit text-center mx-auto shadow-lg '>
            <h1 className='rounded p-6 text-4xl'>{state.count}</h1>
            <h1 className='rounded p-6 text-2xl pt-2'>Question: {state.question}</h1>
            <h1 className='rounded p-6 text-2xl pt-2'>Answer: {state.answer}</h1>
          </div>
          <div className='space-x-2 flex justify-center mt-12'>
            <button type='button' onClick={() => dispatch({ type: "add" })} className='px-4 py-2 bg-neutral-200 rounded cursor-pointer'>Add</button>
            <button type='button' onClick={() => dispatch({ type: "remove" })} className='px-4 py-2 bg-neutral-200 rounded cursor-pointer'>Remove</button>
          </div>
        </div>
        <div className='mt-12'>
          <Form onSubmit={methods.handleSubmit(onSubmit)} />
          <Status />
        </div>
      </div>
    </FormProvider>
  )
}

