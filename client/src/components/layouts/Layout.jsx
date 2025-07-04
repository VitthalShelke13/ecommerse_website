import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import {ToastContainer}  from 'react-toastify'

const Layout = ({children, title,description,keyword,author}) => {
  return (
  <>
  <div className='ram'>
 <Helmet>
  <meta charSet="utf-8" />
  <meta name="description" content={description} />
  <meta name="keyword" content={keyword} />
  <meta name="author" content={author} />
  <title>{title}</title>
</Helmet>

  <Header/>
    <main style={{minHeight:"75vh"}}>
      <ToastContainer/>
    {children}
    </main>
    <Footer/>
    </div>
  </>
  )
}

Layout.defaultProps={
  title:'Eccomerse App - Shop Now',
  description:'MERN Stack Project'
}
export default Layout;