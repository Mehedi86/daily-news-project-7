'use client'
import React from 'react'
import { useFormContext } from 'react-hook-form'

export default function Status() {
  const {
    formState: { isValid },
  } = useFormContext()

  return (
    <div className="space-x-2 flex justify-center mt-12">
      {/* Allow button only enabled if form is valid */}
      <button
        type="button"
        disabled={!isValid}
        className="px-4 py-2 bg-neutral-200 rounded cursor-pointer"
      >
        Allow
      </button>

      {/* Dont Allow button only enabled if form is invalid */}
      <button
        type="button"
        disabled={isValid}
        className="px-4 py-2 bg-neutral-200 rounded cursor-pointer"
      >
        Dont Allow
      </button>
    </div>
  )
}
