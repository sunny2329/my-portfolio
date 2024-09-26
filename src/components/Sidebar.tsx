import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'

function Sidebar() {
  return (
    <div className=''>
      <img src="" alt="myPhoto" />
      <h3>
        <span>Sobhit </span>
        Sinha
      </h3>
      <p>Web Developer</p>
      <p><GiTie className='w-6 h-6' />Download Resume</p>
      <div>
        <a href="">
          <AiFillYoutube className='w-8 h-8' />
        </a>
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
