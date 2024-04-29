import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoutesComponents from './PrivateRoutesComponents';
import { Link } from "react-router-dom";

const PrivateRoutes = () => {
  const [isAuthenticated ,  setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('pass');
  const [error , setError] = useState('');
  const navigate = useNavigate();

  const authenticate = ()=> {
    return username === "user" && password === "pass";
  }
  const handleLogin = (username, password)=> {
    if(authenticate(username, password)){
      setIsAuthenticated(true);
      navigate('/dashboard');
    }else{
      setError('please check username and passord');
    }
  }

  // Eye Toggle Logic 
  // const [isPasswordVisible, setIsPasswordVisible] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  function togglePasswordVisibility() {
    if (type === "text") {
      setType("password");
      setIcon(eyeOff);
    } else {
      setType("text");
      setIcon(eye);
    }
  };
if(isAuthenticated){
  return <PrivateRoutesComponents 
  isAuthenticated = {isAuthenticated}
  />
} else{
  return (
    <div className="h-screen w-screen bg-blue-500 text-white m-auto flex flex-col gap-2 px-5 py-6 place-items-center bg-gradient-to-r from-blue-900 to-indigo-200 shadow-xl">
    <h1 className="text-center text-3xl mt-5 p-3 font-mono tracking-wider">
      Welcome to <span className="font-semibold">Nidhi Bank</span>
    </h1>
    <p className="text-center p-3 text-4xl font-semibold tracking-wider opacity-80">
      login
    </p>

    <form className="text-start h-full w-full flex flex-col  place-items-center gap-5">
      {/* input email */}
      <div className="flex flex-col w-2/4">
        <label htmlFor="" className="font-sarif py-1">
          Email or username
        </label>
        <input
          type="text"
          placeholder="Enter email or username"
          className="w-full text-black px-2 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 tracking-widest"
          id="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {/* input Password */}
      <div className="relative text-start w-2/4 flex flex-col">
        <label htmlFor="" className="font-sarif py-2">
          Password
        </label>
        <input
          type={type}
          // value={isPasswordVisible}
          value={password}
          placeholder="Enter password"
          className=" w-full text-black px-2 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 tracking-widest"
          id="password" 
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Eye Icon */}
        <Icon
          icon={icon}
          size={22}
          className="absolute inset-y-0 right-0 flex px-4 pt-12 text-gray-600 cursor-pointer"
          onClick={togglePasswordVisibility}
        />
      </div>

      <p className="float-start tracking-widest">
        <Link to={"/admin/forgetpassword"}>
        <span className="hover:underline">Forgot password?</span>
        </Link>
      </p>

      <p className="text-start text-pretty w-fit ">
        <span className="opacity-75">if you haven't already account?</span>
        <Link to="/admin/register">
          <span className="hover:underline font-medium text-lg"> Create account</span>
        </Link>
      </p>
      {/* <Link to="/dashboard"> */}
        <button
          type="submit"
          className="p-2 w-48 bg-blue-600 hover:bg-blue-700 hover:shadow-lg rounded-3xl font-light text-2xl m-auto tracking-widest"
          onClick={handleLogin}
        >
          login
        </button>
      {/* </Link> */}
    </form>
    {error && <p>{error}</p> }
  </div>
);
}

};

export default PrivateRoutes;