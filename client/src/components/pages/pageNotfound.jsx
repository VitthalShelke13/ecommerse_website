import React from 'react'
import Layout from '../layouts/Layout'

const pageNotfound = () => {
  return (
    <Layout title='Page Not Found- Eccomerse App'>
        <div className='page_not_found'>
        <div>404</div>
        <div>Oops! Page Not Found</div>
        <button>Go Back</button>
        </div>
    </Layout>
  )
}

export default pageNotfound