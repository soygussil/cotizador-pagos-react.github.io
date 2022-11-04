import React from 'react'

const Button = ({operador, fn}) => {
  
    return (
        <div>
        <button 
        onClick={fn} 
        type="button" 
        className='h-10 w-10 flex items-center justify-center font-extrabold text-white text-2xl bg-red-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-rose-500'
        >{operador}</button>

        </div>
    )
}

export default Button