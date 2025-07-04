import React from 'react'
import {Link} from  'react-router-dom'
const Footer=()=>{
    return(
        <>
        <div
         className='bg-dark text-light p-3'>
            <h4 className='text-center'>
                All Right Reserved @ VitalWorld
            </h4>
            <p className="text-center m-3">
<Link to='/aboutpage'> About</Link>| <Link to='/contactpage'> Contact</Link>| <Link to='/policypage'> Privacy Policy</Link>
            </p>
        </div>
        </>
    )
}
export default Footer