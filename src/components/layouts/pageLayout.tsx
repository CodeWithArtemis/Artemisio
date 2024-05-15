import React from 'react'

const pageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='flex-1 md:w-10/12 lg:w-8/12 mx-auto'>
{children}

    </main>
)
}

export default pageLayout