import React from 'react'
import Neeraj from './Neeraj.jpeg'

const Transfer = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='h-40 w-[28rem] relative   flex gap-8 p-1'>
                <div className='text-center flex flex-col gap-14 h-40'>
                    {/* one */}
                    <div className='h-12 w-24 text-center  mx-auto'>
                        <img src={Neeraj} alt="" className='rounded-full' />
                    </div>
                    <div>
                        <p>Livia Bator</p>
                        <p className='font-semibold text-gray-400'>CEO</p>
                    </div>
                </div>
                {/* two */}
                <div className='text-center flex flex-col gap-14 h-40'>
                    <div className='h-12 w-24 text-center mx-auto'>
                        <img src={Neeraj} alt="" className='rounded-full' />
                    </div>
                    <div>
                        <p>Randy Press</p>
                        <p className='font-semibold text-gray-400'>Director</p>
                    </div>
                </div>
                {/* three */}
                <div className='text-center flex flex-col gap-14 h-40' >
                    <div className='h-12 w-24 text-center mx-auto'>
                        <img src={Neeraj} alt="" className='rounded-full' />
                    </div>
                    <div>
                        <p>Workman</p>
                        <p className='font-semibold text-gray-400'>Designer</p>
                    </div>
                </div>
                <button className='mt-16 h-10'><span className=' text-2xl text-black bg-slate-300 rounded-3xl p-1'>&#10148;</span></button>
            </div>
            <form className='flex gap-10'>
                <label className='font-semibold p-2'>Write Amount</label>
                <div>
                <input type="text" placeholder='write amount'
                    className='absolute p-2 rounded-3xl bg-slate-300 w-64' />
                <input type="submit" value='Send' className='absolute ml-32 border rounded-3xl p-2 bg-blue-700 text-white w-32 text-start' />
                <div className='absolute ml-52 border rounded-3xl p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Transfer