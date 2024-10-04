import React, { useState } from 'react'

const ColorChanger = () => {
  const [color, setColor] = useState('olive')
  return (
    <div className='w-full h-screen grid' style={{ backgroundColor: color }}>
      <div class="place-self-center w-11/12 max-w-md flex flex-col 
          p-6 min-h-[240px] rounded-2xl outline bg-slate-200">
            <div className='mx-auto'>
              <h1 className='text-3xl  font-semibold'>Bg Changer</h1>
            </div>
            <div className='mt-10 flex justify-between'>
                <button className='border p-2  rounded-lg bg-red-500' onClick={()=>setColor('red')}>Red</button>
                <button className='border p-2  rounded-lg bg-yellow-500' onClick={()=>setColor('yellow')}>Yellow</button>
                <button className='border p-2  rounded-lg bg-blue-500' onClick={()=>setColor('blue')}>Blue</button>
                <button className='border p-2  rounded-lg bg-green-500' onClick={()=>setColor('green')}>Green</button>
                
            </div>
            <div className='mt-10 flex justify-between'>
                <button className='border p-2  rounded-lg bg-pink-500' onClick={()=>setColor('pink')}>Pink</button>
                <button className='border p-2  rounded-lg bg-orange-500' onClick={()=>setColor('orange')}>Orange</button>
                <button className='border p-2  rounded-lg bg-purple-500' onClick={()=>setColor('purple')}>Purple</button>
                <button className='border p-2  rounded-lg bg-black text-white' onClick={()=>setColor('black')}>Black</button>
                
            </div>
      </div>
    </div>
  )
}

export default ColorChanger
