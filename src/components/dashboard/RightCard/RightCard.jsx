import React from 'react'

const RightCard = () => {
    return (
        <div className='flex flex-col mx-auto'>
            <h1 className='text-xl font-bold w-96 text-start p-5 '>Recent Transaction</h1>
            <div className='grid grid-cols-3 gap-3 w-96'>
                <div className='border h-16 w-16 p-3 rounded-3xl mx-auto bg-pink-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40"
                        height="40" viewBox="0 0 24 24" fill="none" stroke="#e33b3b"
                        stroke-width="3" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-book-down"><path
                            d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M12 13V7" /><path d="m9 10 3 3 3-3" /></svg>
                </div>

                <div className='flex flex-col'>
                    <p>Deposit from the user</p>
                    <div>
                        <p className=' flex gap-1 font-mono font-thin text-gray-400'><span>28</span><span>January</span><span>2021</span></p>
                    </div>
                </div>
                <p className='text-center text-indigo-800 p-4 font-thin'>+$ 840</p>
            </div>

            <div className='grid grid-cols-3 gap-3 w-96 p-2'>
                <div className='border h-16 w-16 p-3 rounded-3xl mx-auto bg-pink-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#982f2f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-up"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M12 13V7" /><path d="m9 10 3-3 3 3" /></svg></div>
                <div className='flex flex-col'>
                    <p>Paid to User</p>
                    <div>
                        <p className='flex gap-1 font-mono font-thin text-gray-400'><span>28</span><span>January</span><span>2021</span></p>
                    </div>
                </div>
                <p className='text-center text-indigo-800 p-4 font-thin font-xl'>+$ 280</p>
            </div>

            <div className='grid grid-cols-3 gap-3 w-96 p-2'>
                <div className='border h-16 w-16 p-3 rounded-3xl mx-auto bg-pink-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#982f2f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-up"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><path d="M12 13V7" /><path d="m9 10 3-3 3 3" /></svg></div>
                <div className='flex flex-col'>
                    <p>Paid to User</p>
                    <div>
                        <p className='flex gap-1 font-mono font-thin text-gray-400'><span>28</span><span>January</span><span>2021</span></p>
                    </div>
                </div>
                <p className='text-center text-indigo-800 p-4 font-thin font-xl'>+$ 280</p>
            </div>
        </div>
    )
}

export default RightCard