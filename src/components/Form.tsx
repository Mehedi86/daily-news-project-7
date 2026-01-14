'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
}

type FormProps = {
  onSubmit: () => void
}

export default function Form({ onSubmit }: FormProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>()

  return (
    <div className="border-2 p-4 rounded">
      <form onSubmit={onSubmit}>
        <label className="block py-2">Name</label>
        <input
          className="w-full border p-2"
          {...register('name', { required: true })}
        />

        <label className="block py-2">E-mail</label>
        <input
          className="w-full border p-2"
           {...register('email', { required: true })}
        />

        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}

        <input
          type="submit"
          className="bg-neutral-800 text-white rounded px-4 py-2 mt-4"
        />
      </form>
    </div>
  )
}
