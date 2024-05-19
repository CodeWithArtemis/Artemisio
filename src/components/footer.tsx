import Link from 'next/link'
import React from 'react'
import renderIcon from '@/lib/iconUtils'
import { cn } from '@/lib/utils'
import data from '@/data/Header.json'

const Footer = () => {
const { socialLinks } = data;
  return (
    <div className='flex  flex-row  justify-between items-end max-h-[10dvh] '>
        <div>Designed and Developed by Apurva Narayan Pradhan</div>
        <div className=" flex  items-center justify-start    ">
            {socialLinks.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="flex cursor-pointer  space-x-4 pr-5   transition-all duration-100 hover:text-primary "
              >
                {renderIcon(link.icon)}
              </Link>
            ))}
          </div>
        </div>

  )
}

export default Footer