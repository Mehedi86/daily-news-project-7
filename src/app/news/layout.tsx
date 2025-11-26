import Link from 'next/link'
import React from 'react'

export default function newsLayout({ children }: { children: React.ReactNode }) {
    return (

        <div className='py-12'>
            <h1 className='text-2xl font-bold mb-8'>Latest News</h1>
            <nav className='space-x-4 flex'>
                <Link href="/news/sports">Sports</Link>
                <Link href="/news/tech">Tech</Link>
                <Link href="/news/local">Local</Link>
            </nav>

            <div className='flex gap-4 items-center mt-6'>
                <div className='h-96 md:w-4/5 bg-neutral-200 items-center justify-center'>
                    {children}
                </div>
                <div className='md:w-1/5 h-96 bg-neutral-200'>

                </div>
            </div>
        </div>
    )
}
