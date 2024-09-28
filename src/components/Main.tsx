'use client'
import React from 'react'
import Sidebar from './Sidebar'

function Main() {
    return (
        <div className='grid grid-cols-12 gap-6 my-14 lg:px-48 px-5'>
            <div className="lg:col-span-3 col-span-12 bg-white rounded-2xl text-center p-4">
                <Sidebar />
            </div>
            <div className="lg:col-span-9 col-span-12 bg-white rounded-2xl">
                Main Content
            </div>
        </div>
    )
}

export default Main
