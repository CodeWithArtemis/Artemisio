import React from 'react'

/**
+ * Renders the main layout of the page.
+ *
+ * @param {React.ReactNode} children - The content to be rendered inside the main layout.
+ * @return {JSX.Element} The main layout component.
+ */
const pageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='flex-1 md:w-10/12 lg:w-8/12 mx-auto'>
{children}

    </main>
)
}

export default pageLayout