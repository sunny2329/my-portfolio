'use client'
import React from 'react'
import { DNA } from 'react-loader-spinner'

function loading() {
    return (
        <div className='h-full w-full flex justify-center items-center '>
            <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{color:'#fffce1'}}
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}

export default loading
