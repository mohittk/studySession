import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'




export default function Signup() {
    const navigate = useNavigate();
    const formSubmit = () => {

    }

return (
    <>
    <div className="upperbar bg-indigo-600">
          <div className="nav float-right p-[3rem] text-2xl font-encode text-white">
            <Navbar />
          </div>
          <Link to="/">
            <h1 className="text-6xl text-white  shadow-2xl font-medium p-8 font-titan">
              {" "}
              Group Study Sessions
            </h1>
          </Link>
        </div>

    <div className="form">
    <div className="signup-form relative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10 bg-[#ffffff]">
        <form onSubmit={formSubmit}> 
        <h1 className="ml-10 mb-5 text-[3rem] font-semibold text-indigo-600">
            {" "}
            Signup
            <br />
            <span className="text-xl">Tell us about yourself !</span>
          </h1>
        <input type="text" placeholder="Enter your Name"   className="role shadow-2xl p-3 w-[85%] text-xl ml-10 bg-white  outline-none border-2 rounded-xl" />
        <input type="text" placeholder="Enter your Email" className="role shadow-2xl p-3 w-[85%] text-xl ml-10 bg-white  outline-none border-2 rounded-xl" />
        <input type="text" placeholder="Enter your Password" className="role shadow-2xl p-3 w-[85%] text-xl ml-10 bg-white  outline-none border-2 rounded-xl" />

        <button type="submit" className="submit p-3 border-2 shadow-2xl w-[85%] text-xl hover:bg-[#c0c0c0] ml-10 mb-5 bg-white outline-none rounded-xl "> Submit </button>
        <button type="submit" className="submit p-3 border-2 shadow-2xl w-[85%] text-xl hover:bg-[#c0c0c0] ml-10 mb-5 bg-white outline-none rounded-xl " onClick={() => {navigate("/login")}} > Login </button>
        </form>
        </div>
        </div>
    </>
)
}