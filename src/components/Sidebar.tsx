import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'

function Sidebar() {
  return (
    <div className=''>
      <img src="" alt="myPhoto" />
      <h3 className='my-4 text-3xl font-medium tracking-wider'>
        <span>Sobhit </span>
        Sinha
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
      <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' href='' download='name'><GiTie className='w-6 h-6' />Download Resume</a>
      <div className='flex justify-around my-5 text-green-500'>
        <a href="">
          <AiFillGithub className='w-8 h-8' />
        </a>
        <a href="">
          <AiFillLinkedin className='w-8 h-8' />
        </a>
      </div>

      {/* address */}
      <div>
        <div>
          <GoLocation />
          <span>Jaipur, Indian</span>
        </div>
        <p>sobhit230@gmail.com</p>
        <p>+91-9358250619</p>
      </div>
      <button>Email Me</button>
      <button>Toggle Theme</button>
    </div>
  )
}

export default Sidebar
