import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  // Store the OTP in Array index
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (index, value) => {
    // Copy existing OTP array
    const newOTP = [...otp];
    // Update the OTP digit at the specified index
    newOTP[index] = value;
    // Update the OTP state with the new array
    setOTP(newOTP);
    // Focus on the next input field if available
    if (value !== "" && index < otp.length - 1) {
      document.getElementById(`otp-input- ${index + 1}`).focus();
    }
  };
  return (
    <form className=" h-2/4 w-2/4 border text-white m-auto flex flex-col gap-10 rounded-xl px-5 py-6 place-items-center bg-gradient-to-r from-blue-900 to-indigo-300 shadow-xl">
      <h1 className="text-center text-3xl mt-5 p-3 font-mono tracking-wider">
        Welcome to <span className="font-semibold">Nidhi Bank</span>
      </h1>
      <p className="text-center p-3 text-4xl font-semibold tracking-wider opacity-80">
        
        Enter verification code{" "}
      </p>
      <label htmlFor="" className="font-sarif py-1">
      
        check your register email and fill correct otp inside box{" "}
      </label>

      {/* OTP Input */}
      <div className="flex flex-row text-center justify-center gap-5">
        {/* Render 6 input fields for OTP */}
        {/* implement map() method */}
        {otp.map((num, index) => (
          <input
            key={`otp-input-${index}`}
            value={num}
            type="text"
            id="otp-input"
            maxLength={1}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className=" w-16 h-12 border rounded-2xl text-center bg-white text-black font-mono"
          />
        ))}
      </div>
      <Link to="/admin/login">
        <button
          type="submit"
          className="border p-2 w-36 bg-blue-900 rounded-3xl font-thin text-2xl m-auto tracking-widest"
        >
          Verify
        </button>
      </Link>
    </form>
  );
};

export default Register;
