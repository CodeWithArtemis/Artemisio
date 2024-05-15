import React from 'react'
import Image from 'next/image'  
import {posts} from "@/../.velite"
 
const Bio = () => {
console.log(posts)
  return (
    <div className="   flex items-center justify-evenly pr-4 py-10 text-2xl  "> 
<div className=' flex flex-1 mr-5  my-3 '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          corporis laboriosam quidem maxime adipisci cumque praesentium deserunt
          repellat repudiandae reiciendis ipsam mollitia nisi voluptatibus,
          veniam dolorum incidunt aut quam vitae.
          </div>
       <div className="flex p-2 ml-5 rounded-full">

<Image className='rounded-full border-b-4 border-mauve' src="/Artemisio.jpg" alt="Artemisio" width={250} height={250} />
</div>
</div>  
  )
}

export default Bio