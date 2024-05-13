// utils/iconUtils.js
import React from 'react';
import { FaGithub, FaTwitter, FaYoutube, FaHome, FaCode } from 'react-icons/fa';
import { MdArticle, MdConnectWithoutContact, MdDarkMode } from 'react-icons/md';

const renderIcon = (iconName:string) => {
  switch (iconName) {
    case 'FaGithub':
      return <FaGithub className='text-[1.4vw]' />;
    case 'FaTwitter':
      return <FaTwitter className='text-[1.4vw]'/>;
    case 'FaYoutube':
      return <FaYoutube className='text-[1.4vw]'/>;
    case 'FaHome':
      return <FaHome className='text-[1.4vw]'/>;
    case 'FaCode':
      return <FaCode className='text-[1.4vw]'/>;
    case 'MdArticle':
      return <MdArticle className='text-[1.4vw]'/>;
    case 'MdConnectWithoutContact':
      return <MdConnectWithoutContact className='text-[1.4vw]'/>;
    case 'MdDarkMode':
      return <MdDarkMode className='text-[1.4vw]'/>;
    default:
      return null;
  }
};

export default renderIcon;
