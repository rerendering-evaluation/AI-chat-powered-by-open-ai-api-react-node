import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare,FaMedium} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='l' target='_blank'><BsLinkedin /></a>
        <a href='g' target='_blank'><FaGithubSquare /></a>
        <a href='m' target='_blank'><FaMedium /></a>
    </div>
  )
}

export default HeaderSocials