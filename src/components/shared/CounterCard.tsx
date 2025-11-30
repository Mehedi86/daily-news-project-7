import React from 'react'
import { Button } from '../ui/button'

interface CounterCardProps {
    title: string,
    value: number,
    onIncrement: () => void,
    onDecrement: () => void
}

export default function CounterCard({ title, value, onIncrement, onDecrement }: CounterCardProps) {
    return (
        <div className="w-[320px] bg-white shadow-lg rounded p-6 border border-gray-200">
            <p className='py-2'>{title}</p>
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">{value}</h1>

            <div className="flex items-center justify-between gap-4">
                <Button onClick={onIncrement} className="flex-1 py-2 rounded-xl shadow">Increase</Button>
                <Button onClick={onDecrement} className="flex-1 py-2 rounded-xl shadow">Decrease</Button>
            </div>
        </div>

    )
}

