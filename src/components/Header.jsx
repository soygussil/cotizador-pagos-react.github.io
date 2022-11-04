import React from 'react'
import { formatearFecha } from '../helpers/index.js'

// let currentDate = new Date().toJSON().slice(0, 10)
let data = new Date()
const Header = () => {
    return (
        <div>
            <div className='font-thin text-xl text-right py-3'>{formatearFecha(data)}</div>
            <h1 className='text-4xl font-extrabold text-blue-800 text-center'>¿Cuánto <span className='text-red-500'>dinero</span> necesitas?</h1>
        </div>
    )
}

export default Header