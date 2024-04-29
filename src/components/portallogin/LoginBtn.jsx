import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <div className="h-screen w-screen m-auto text-center grid bg-blue-400 bg-gradient-to-r from-blue-900 to-indigo-150 shadow-xl">
      <h1 className=" font-mono text-pretty text-center text-white text-3xl font-bold mt-16 tracking-widest">
       Portal
      </h1>
      <div className="text-center flex flex-col gap-4">
        <Link to="/login">
          <button className="p-2 border rounded-2xl w-40 h-12 bg-green-300 font-mono text-white text-lg tracking-widest">
            ADMIN
          </button>
        </Link>
        <Link to="/register">
          <button className="p-2 border rounded-2xl w-40 h-12 bg-green-300 00 font-mono text-white text-lg tracking-widest">
            AGENT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginBtn;
