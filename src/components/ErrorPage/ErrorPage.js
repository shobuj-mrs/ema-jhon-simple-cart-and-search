import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <section className=''>
            <p className=''> Sorry, we couldn't find this page. </p>
            <Link to='/' className=''>Back to homepage</Link>
        </section>
    )
}

export default ErrorPage;