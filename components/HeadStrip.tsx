import React from 'react'
import CONSTANT from '../lib/constant'

function HeadStrip() {
    
  return (
    <div className='w-full bg-black '>
        <div className="container mx-auto flex text-sm text-white gap-5" >
        <a href={`tel:${CONSTANT.email}`} className='link'>{`${CONSTANT.countryCode} ${CONSTANT.phone}`}</a>
        <a href={`mailto:${CONSTANT.email}`} className='link'>{CONSTANT.email}</a>
        </div>
    </div>
  )
}

export default HeadStrip