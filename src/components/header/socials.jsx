import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {GrInstagram} from 'react-icons/gr'

const socials = () => {
  return (
    <div className='header__socials' >
        <a href='https://www.linkedin.com/in/talhathmd/' alt="Talha Tahmid Linkedin" target='_blank' className='socials__linkedin'><BsLinkedin /></a>
        <a href='https://github.com/talhathmd' alt="Talha Tahmid Github" target='_blank' className='socials__github'><FiGithub /></a>
        <a href='https://www.instagram.com/talha.thmd/' alt="Talha Tahmid Instagram" target='_blank' className='socials__instagram'><GrInstagram /></a>
    </div>
  )
}

export default socials