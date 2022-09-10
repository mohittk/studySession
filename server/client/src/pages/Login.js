import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login_user } from '../controllers/UserRoutes';

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login_handle_change = async(e) => { 
      e.preventDefault();
      let obj = {
        email: email,
        password: password,
      }
      login_user(obj).then((data) => {
        localStorage.setItem("user_token", data.token);
        alert(data.message);
        window.location.reload();
      })
      
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

 
    <div className="signup-form relative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10 bg-[#ffffff]">
        
        <h1 className="ml-10 mb-5 text-[3rem] font-semibold text-indigo-600">
            {" "}
            Login
          </h1>
        <input value={email} onChange={(e) => { setEmail(e.target.value);}} type="text" placeholder="Enter your Email" className="role shadow-2xl p-3 w-[85%] text-xl ml-10 bg-white  outline-none border-2 rounded-xl" />
        <input value={password} onChange={(e) => { setPassword(e.target.value);}} type="password" placeholder="Enter your Password" className="role shadow-2xl p-3 w-[85%] text-xl ml-10 bg-white  outline-none border-2 rounded-xl" />

        <button onClick={login_handle_change}type="submit" className="submit p-3 border-2 shadow-2xl w-[85%] text-xl hover:bg-[#c0c0c0] ml-10 mb-5 bg-white outline-none rounded-xl "> Submit </button>

        </div>
    </>
)
}