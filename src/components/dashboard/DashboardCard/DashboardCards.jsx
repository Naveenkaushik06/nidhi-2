
import React from 'react';

const DashboardCards = () => {
  return (
    <div className='flex h-32 w-[38rem]  gap-3'>

    {/* Total Balance */}
    <div className='flex flex-col gap-1 w-48 p-2 bg-blue-500 text-white'>
    <div className='border h-12 w-10 p-2 rounded-3xl bg-pink-500' >
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-app-window"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4"/><path d="M2 8h20"/><path d="M6 4v4"/></svg>
       </div>
       <div className='p-4 flex flex-col gap-1'>
       <p>Total Balance</p>
       <p className='flex gap-1'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>12,750</p>
       </div>
       </div>

       {/* Total Loan Provided */}
       <div className='flex flex-col w-48 p-2 bg-slate-50'>
       <div className='border h-12 w-10 p-2 rounded-3xl bg-pink-500'>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
       </div>
       <div className='p-4 flex flex-col gap-2'>
       <p>Total Loan Provided</p>
       <p className='flex gap-1'><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>12,750</p>
       </div>
       </div>
       {/* Total User */}
       <div className='flex flex-col gap-1 w-48 p-2 bg-pink-500 text-green-400 font-bold'>
       <div className='border h-12 w-10 p-2 rounded-3xl bg-pink-500'>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
       </div>
       <div className='p-3 flex flex-col gap-1'>
       <p>Total User</p>
       <p className='pl-2'><span>27,000</span></p>
       </div>
       </div>
    </div>
  );
};

export default DashboardCards;