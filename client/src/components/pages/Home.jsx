import React from 'react'
import Layout from '../layouts/Layout';
import { useAuth } from '../../contextapi/contextAuth';

const Home = () => {
  const [Auth,SetAuth]=useAuth()
  return (
    <Layout title='Homepage- Eccomerse App'>
    <div>Home</div>
    <pre>{JSON.stringify(Auth,null,4)}</pre>
   
    </Layout>
  )
}

export default Home