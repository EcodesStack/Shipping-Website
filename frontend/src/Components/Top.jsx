import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin ,FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Top = () => {


  return (
    <div className='hidden md:flex justify-between items-center bg-gray-900 text-gray-300 px-24 py-2'>
      <div className='flex gap-6'>
        <p className='text-sm'>
          <FaPhoneAlt className="pb-0.5 inline-block mr-2 text-gray-400" />
          +234-913-525-7462
        </p>
        <p className='text-sm'>
          <FaEnvelope className="pb-0.5 inline-block mr-2 text-gray-400" />
          citycargo@gmail.com
        </p>
      </div>

      <div className='flex gap-4'>
        <FaTwitter className="text-gray-400" size={18} />
        <FaInstagram className="text-gray-400" size={18} />
        <FaLinkedin className="text-gray-400" size={18} />
        <FaFacebook className="text-gray-400" size={18} />
      </div>
    </div>
  )
}

export default Top
