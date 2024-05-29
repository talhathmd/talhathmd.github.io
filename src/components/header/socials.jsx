import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {GrInstagram} from 'react-icons/gr'

const socials = () => {
  return (
    <div className='header__socials' >
        <a href='https://www.linkedin.com/in/talhathmd/' target='_blank' className='socials__linkedin'><BsLinkedin /></a>
        <a href='https://github.com/talhathmd' target='_blank' className='socials__github'><FiGithub /></a>
        <a href='https://www.instagram.com/talha.thmd/' target='_blank' className='socials__instagram'><GrInstagram /></a>
    </div>
  )
}

export default socials