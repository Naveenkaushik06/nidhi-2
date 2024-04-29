import React, { useState } from 'react'
import fakeData from "../constants/Random"
// import { NavLink } from 'react-router-dom';
import Header from '../dashboard/Header';
import Sidebar from '../dashboard/Sidebar';


const Loans = () => {
  const [loanData] = useState(fakeData);


  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ height: "100vh", background: 'lightgrey' }}>
        <div className="  h-auto  sm:ml-72 ">
          <section className=" w-full relative top-20 overflow-hidden">
            <div className="container ml-2 p-3">
              <div className="flex rounded-xl ">
                <div className="w-full lg:pl-2 bg-white rounded-2xl md:w-1/2 lg:w-1/4">
                  <div className="flex  items-center align-middle">
                    <div className="w-auto p-2">
                      <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg className="w-[39px] h-[39px] text-indigo-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                        </svg>
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 p-2">
                      <div className="w-full ">
                        <span className=" text-slate-400 tracking-wider flex-none">Personal Loans</span>
                        <div>
                          <span className=" font-bold tracking-wider">$500,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="w-full lg:pl-2 ml-3 bg-white rounded-2xl md:w-1/2 lg:w-1/4">
                  <div className="flex  items-center align-middle">
                    <div className="w-auto p-2">
                      <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-orange-100 rounded-full">
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg className="w-[39px] h-[39px] text-yellow-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M5 14a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                        </svg>
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 p-2">
                      <div className="w-full ">
                        <span className=" text-slate-400 tracking-wider">Corporate Loans</span>
                        <div>
                          <span className=" font-bold tracking-wider">$100,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="w-full lg:pl-2 bg-white ml-3 rounded-2xl md:w-1/2 lg:w-1/4">
                  <div className="flex  items-center align-middle">
                    <div className="w-auto p-2">
                      <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <line x1="12" y1="20" x2="12" y2="10"></line>
                          <line x1="18" y1="20" x2="18" y2="4"></line>
                          <line x1="6" y1="20" x2="6" y2="16"></line>
                        </svg></span>
                      </div>
                    </div>
                    <div className="flex-1 p-2">
                      <div className="w-full ">
                        <span className=" text-slate-400 tracking-wider">Business Loans</span>
                        <div>
                          <span className=" font-bold tracking-wider">$500,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="w-full ml-3 lg:pl-2 bg-white rounded-2xl md:w-1/2 lg:w-1/4">
                  <div className="flex  items-center align-middle">
                    <div className="w-auto p-2">
                      <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><svg className="w-6 h-6 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z" clipRule="evenodd" />
                        </svg>
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 p-2">
                      <div className="w-full ">
                        <span className=" text-slate-400 tracking-wider">Custom Loans</span>
                        <div>
                          <span className=" font-bold tracking-wider">Choose Moeny</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=' absolute top-44 left-80 mb-1'> <span className='text-xl font-bold'> Active Loans Overview </span>
        </div>
        <div className="absolute left-[19rem] w-[74rem]  mt-5 top-48  shadow-md sm:rounded-lg">

          <table className=" w-full p-3 text-sm text-center rounded-lg   text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-slate-50  dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <span className='font-bold font-mono text-base whitespace-nowrap text-black'>S. No</span>
                  </div>
                </td>
                <th scope="row" className="px-8  py-4 font-mono  text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                  Loan Money
                </th>
                <td className=" py-4   text-base font-mono  font-bold text-gray-900 whitespace-nowrap dark:text-white">
                  Left To Repay
                </td>
                <td className=" py-4  font-mono   text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                  Duration
                </td>
                <td className=" py-4  font-mono   text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                  IneteresRate
                </td>
                <td className=" py-4  text-base font-mono  font-bold text-gray-900 whitespace-nowrap dark:text-white">
                  Installment
                </td>

                <td className="text-base font-bold font-mono  py-4   text-gray-900 whitespace-nowrap dark:text-white">
                  Repay
                </td>
              </tr>
            </thead>
            <tbody>
              {loanData.map(loan => (
                <tr key={loan.id} className="bg-white  text dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">

                    <div className="flex items-center">
                      <span className='font-bold text-black'>{loan.id}</span>
                    </div>
                  </td>

                  <th scope="row" className="py-4  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white">
                    {loan.loanMoney}
                  </th>
                  <td className=" py-4  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white">
                    {loan.leftToRepay}
                  </td>
                  <td className=" py-4  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white">
                    {loan.duration}
                  </td>
                  <td className=" py-4  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white">
                    {loan.interestRate}
                  </td>
                  <td className=" py-4  font-mono   text-base font-bold  text-gray-900 whitespace-nowrap dark:text-white">
                    ${loan.installment}/Month
                  </td>
                  <td className="flex items-center  py-4">
                    <button className="w-full   font-mono   text-base font-bold rounded-3xl bg-white border-solid border-2 hover:border-indigo-600 hover:text-blue-600
                     ">Repay</button>
                  </td>

                </tr>
              ))}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <span className='py-4  font-mono   text-base font-bold  text-red-500'>Total</span>
                  </div>
                </td>
                <th scope="row" className="py-4  font-mono   text-base font-bold   text-red-500 whitespace-nowrap dark:text-white">
                  {loanData.map(e=>e.loanMoney).reduce((acc, curr)=>{
        return acc + curr
                  },0)}
                </th>
                <td className=" py-4  font-mono   text-base font-bold   text-red-500 whitespace-nowrap dark:text-white">
                  {loanData.map(e => e.leftToRepay).reduce((acc, curr) => {
                    return acc + curr;
                  }, 0)}
                </td>
                <td className=" py-4  font-mono   text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">
                </td>
                <td className=" py-4  font-mono   text-base font-bold text-gray-900 whitespace-nowrap dark:text-white">

                </td>
                <td className=" py-4  font-mono   text-base font-bold text-red-500 whitespace-nowrap dark:text-white">
                  ${loanData.map(e => e.installment).reduce((acc, arr) => {
                    return acc + arr
                  }, 0)}/Month

                </td>

                <td className="flex items-center  py-4">
                  <button className="w-full p-3 px-4 py-2  bg-white 
                      "></button>
                </td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>



    </>
  )
}

export default Loans
