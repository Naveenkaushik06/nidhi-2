import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    function togglePasswordVisibility() {
        if (type === "text") {
            setType('password');
            setIcon(eyeOff);
        } else {
            setType('text');
            setIcon(eye);
        }
    }
    return (
        <div className='h-2/4 w-2/4 border bg-blue-500 text-white m-auto flex flex-col gap-2 rounded-xl px-5 py-6 place-items-center bg-gradient-to-r from-blue-900 to-indigo-200 shadow-xl'>
            <h1 className='text-center text-3xl mt-5 p-3 font-mono tracking-wider'>Welcome to <span className='font-semibold'>Nidhi Bank</span></h1>
            <p className='text-center p-3 text-4xl font-semibold tracking-wider opacity-80'> Login </p>

            <form className='text-start h-full w-full flex flex-col  place-items-center gap-5'>
                {/* input email */}
                <div className='flex flex-col w-2/4'>
                    <label htmlFor="" className='font-sarif py-1'>email and user name</label>
                    <input type="text" placeholder='enter Email and user name' className='w-full text-black px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 tracking-widest' />
                </div>
                {/* input Password */}
                <div className="relative text-start w-2/4 flex flex-col">
                    <label htmlFor="" className='font-sarif py-2'>password</label>
                    <input
                        type={type}
                        value={isPasswordVisible}
                        placeholder='enter password'
                        onChange={(e) => setIsPasswordVisible(e.target.value)}
                        className=" w-full text-black px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 tracking-widest"
                    />
                    {/* Eye Icon */}
                    <Icon
                        icon={icon}
                        size={25}
                        className="absolute inset-y-0 right-0 flex px-2 pt-12 text-gray-600 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    />
                </div>

                <a href="" className='float-start tracking-widest'><span>Forget Password</span></a>

                <p className='text-start text-pretty w-fit'>if you haven't already account ? <Link to="/register"><span className='font-semibold text-xl'>create account</span></Link></p>
                <Link to = "adminlogin"><button
                    type='submit'
                    className='border p-2 w-36 bg-blue-900 rounded-3xl font-thin text-2xl m-auto tracking-widest'
                >login</button></Link>
            </form>
        </div>
    )
};

export default AdminLogin;
