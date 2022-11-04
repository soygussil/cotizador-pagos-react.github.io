import { useState, useEffect } from 'react'
import React from 'react'
import Header from './components/Header'
import Button from './components/Button';
import {formatearDinero,calcularTotalPagar} from './helpers/index.js'

const App = () => {

  const [cantidad, setCantidad] = useState(10000);
  const [meses,setMeses]=useState(6);
  const [total,setTotal]=useState(0);
  const [pago,setPago]=useState(0)

  useEffect(()=>{
    const resultadoTotalPagar=calcularTotalPagar(cantidad,meses)
    setTotal(resultadoTotalPagar)
    //Calcular el pago mensual

  },[cantidad,meses])

  useEffect(()=>{
    setPago(total/meses)
  },[total])

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const handleChange = (e) => {
    setCantidad(Number(e.target.value))
  }
  const handleClickDecremento=()=>{
    const valor=cantidad-STEP
  

    if (valor<MIN) {
      alert('cantidad no válida')
      return;
    }
    setCantidad(valor)
  }
  const handleClickIncremento=()=>{
    const valor=cantidad+STEP
   
    if (valor>MAX) {
      alert('cantidad no válida')
      return;
    }
    setCantidad(valor)
  }

  return (
    <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
      <Header />
      <div className='flex justify-between my-6'>
      <Button operador='-' fn={handleClickDecremento}/> 
      <Button operador='+' fn={handleClickIncremento}/> 
        
      </div>
      <input type="range"
        className='w-full h-6 bg-gray-200 accent-red-500 hover:accent-red-600'
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className='text-center my-10 text-5xl font-extrabold text-blue-800'>{formatearDinero(cantidad)}</p>

      <h2 className='text-2xl font-extrabold text-blue-800 text-center'>
        Elige un <span className='text-red-600'>Plazo</span> a pagar
      </h2>
      <select
      className='mt-5 w-full p-2 bg-wihte border border-gray-300 rounded-lg text-center text-xl font-bold text-red-600'
      value={meses}
      onChange={e => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="18">18 Meses</option>
        <option value="24">24 Meses</option>
        <option value="32">32 Meses</option>
      </select>
    <div className='my-5 space-y-3 bg-gray-50 p-5'>
    <h2 className='text-2xl font-extrabold text-blue-800 text-center'>
        Resumen <span className='text-red-600'>de pagos</span>
    </h2>
    <p className='text-blue-800 text-xl font-bold text-center'>{meses} Meses</p>
    <p className='text-blue-800 text-xl font-bold text-center'>{formatearDinero(total)} Total a pagar</p>
    <p className='text-blue-800 text-xl font-bold text-center'>{formatearDinero(pago)} Mensuales</p>
    </div>
    </div>

  )
}

export default App