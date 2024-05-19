import Link from 'next/link'
import React from 'react'

const banner = () => {
  return (
<div className=' flex justify-center gap-3 items-center bg-rose-500 text-lg md:text-2xl  '>  
    <div className='flex items-center '>
        This Site is under construction
    </div>
    <div className='flex items-center gap-2'>
        Check progress on my github
        <Link href="https://github.com/CodeWithArtemis/Artemisio " className='text-primary underline'>
        Artemisio
        </Link>
    </div>
</div>
)
}

export default banner