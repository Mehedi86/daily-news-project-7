'use client'

import CounterCard from '@/components/shared/CounterCard'
import Total from '@/components/Total'
import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export default function counter() {
    const counters = useAppSelector((state) => state.counters);
    const dispatch = useDispatch();
    console.log(counters)

    return (
        <div className='max-w-7xl mx-auto mt-4'>
            <div className='flex justify-center items-center gap-4'>
                {counters.map(counter => <CounterCard key={counter.id}
                    title={`Sector ${counter.id}`}
                    value={counter.value}
                    onIncrement={() => dispatch(increment(counter.id))}
                    onDecrement={(() => dispatch(decrement(counter.id)))}
                />)}
            </div>
            <div className='flex justify-center mt-12'>
                <Total />
            </div>
        </div>
    )
}
