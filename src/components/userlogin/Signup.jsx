import { useState } from "react";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const togglePasswordVisibility = () => {
    if (type === "text") {
      setType("password");
      setIcon(eyeOff);
    } else {
      setType("text");
      setIcon(eye);
    }
  };
  return (
    <div className=" h-2/4 w-2/4 border bg-blue-500 text-white m-auto flex flex-col gap-2 rounded-xl px-5 py-6 place-items-center bg-gradient-to-r from-blue-900 to-indigo-300 shadow-xl">
      <h1 className="text-center text-3xl mt-5 p-3 font-mono tracking-wider">
        Welcome to <span className="font-semibold">Nidhi Bank</span>
      </h1>
      <p className="text-center p-3 text-4xl font-semibold tracking-wider opacity-80">
        Register
      </p>

      <form className="text-start h-full w-full flex flex-col  place-items-center gap-5">
        <div className="grid grid-cols-2 gap-5 w-4/5">
          {/* 1st input */}
          <div className="grid grid-cols-1">
            <label htmlFor="" className="font-sarif py-1">
              First name
            </label>
            <input
              type="text"
              placeholder="enter first name"
              className="w-full text-black px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 tracking-widest"
            />
          </div>

          {/* 2nd Input */}
          <div className="w-full grid grid-cols-1">
            <label
              htmlFor=""
              className="font-sarif 
                    py-1"
            >
              Last name
            </label>
            <input
              type="text"
              placeholder="enter last name"
              className="w-full text-black px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 tracking-widest"
            />
          </div>
        </div>
        {/* 3rd Input  */}
        <div className="flex flex-col w-4/5">
          <label
            htmlFor=""
            className="font-sarif 
                    py-1"
          >
            Enter email
          </label>
          <input
            type="text"
            placeholder="enter Email"
            className="w-full text-black px-4 py-2 
                    text-base border border-gray-300 rounded 
                    outline-none focus:ring-blue-500 
                    focus:border-blue-500 focus:ring-1 
                    tracking-widest"
          />
        </div>
        {/* 4th Input */}
        <div className="flex flex-col w-4/5">
          <label
            htmlFor=""
            className="font-sarif 
                    py-1"
          >
            Enter phone
          </label>
          <input
            type="text"
            placeholder="enter phone"
            className="w-full text-black px-4 py-2 
                    text-base border border-gray-300 rounded 
                    outline-none focus:ring-blue-500 
                    focus:border-blue-500 focus:ring-1 
                    tracking-widest"
          />
        </div>
        {/* Password */}
        <div className="relative text-start w-4/5 flex flex-col">
          <label htmlFor="" className="font-sarif py-2">
            password
          </label>
          <input
            type={type}
            value={isPasswordVisible}
            placeholder="enter password"
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
        {/* Login button */}
        <p className="text-start text-pretty w-fit">
          if you have already account ?{" "}
          <Link to="/login">
            <span className="font-semibold text-xl">login account</span>
          </Link>
        </p>
        <Link to="/admin/login">
          <button
            type="submit"
            className="border p-2 w-36 bg-blue-900 
                    rounded-3xl font-thin text-2xl m-auto 
                    tracking-widest"
          >
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
