import Navbar from '../components/Navbar';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Home () {
    const navigate = useNavigate();
    
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
        <div className="">
            
        <div className="home-other p-10 flex flex-row bg-white">


<div className="text float-right">
  <h1 className="recru text-[3.5rem] text-indigo-600 font-semibold p-16 m-5">
    {" "}
    Do you like group study?{" "}
  </h1>
  <p className="recru text-[1.5rem] ml-20 mr-[15%] text-justify font-medium text-indigo-600 ">
    {" "}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </p>
  <div className="mt-10 ml-[3.3rem]">
    <Link
      to="/sessions"
      className="submit p-3 border-2 shadow-2xl text-xl hover:bg-indigo-500 font-medium ml-6 mb-5 bg-indigo-600 text-white outline-none rounded-xl "
    >
      Join Group sessions
    </Link>
  </div>
</div>
</div>
            <button onClick={ () => {navigate("/sessions")}}>Join</button>
        </div>
        
        
        </>
    )
}