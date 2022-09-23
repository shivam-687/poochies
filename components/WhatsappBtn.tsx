import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import CONSTANT from '../lib/constant'

export type WhatsappBtnProps = {
    number?: string,
    message?: string
}

function WhatsappBtn(props: WhatsappBtnProps) {
    
  return (
    <a href={`https://wa.me/${props.number||CONSTANT.phone}`} className="btn bg-green-600 hover:bg-green-700 border-none text-white"><span><FaWhatsapp className="text-3xl mr-2"/></span>{`Let's Chat`}</a>
  )
}

export default WhatsappBtn