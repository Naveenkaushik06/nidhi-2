import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form
      className=" h-screen w-screen  via-blue-900 text-white m-auto flex flex-col gap-12 rounded-xl px-5 py-6 place-items-center bg-gradient-to-l from-blue-300 to-indigo-900
        "
    >
      <h1 className="text-center text-3xl mt-5 p-3 font-mono tracking-wider">
        Welcome to <span className="font-semibold">Nidhi Bank</span>
      </h1>
      <p className="text-center p-3 text-4xl font-mono font-thin tracking-wide">
        Verification Email
      </p>
      <div className="flex flex-col w-2/4">
        <label htmlFor="" className="font-sarif">
          email and user name
        </label>
        <input
          type="text"
          placeholder="enter Email and user name"
          className="w-full text-black px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
        />
      </div>
      <Link to="/otpvarification">
        <button
          type="submit"
          className="border p-2 w-36 bg-blue-900 
                rounded-3xl font-thin text-2xl m-auto tracking-widest"
        >
          Continue
        </button>
      </Link>
    </form>
  );
};

export default Login;
