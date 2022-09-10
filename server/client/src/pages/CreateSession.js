import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react';
import { auth_user } from '../controllers/UserRoutes';
import { create_session } from '../controllers/SessionRoutes';
import DateTimePicker from 'react-datetime-picker';


export default function CreateSession () {

    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [startDate, setStartDate] = useState(new Date);
    const [endDate, setEndDate] = useState(new Date());
    const [maxStudLimit, setMaxStudLimit] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState('');
    const [user_id, setUser_id] = useState('');
    

    // useEffect(()=> {
    //   if(localStorage.getItem("user_token")) {
    //     let obj = {
    //       token: localStorage.getItem("user_token")
    //     };
    //     auth_user(obj).then((data) => {
    //       setIsLoggedIn(true);
    //       setUser_id(
    //         JSON.parse(atob(localStorage.getItem("user_token").split(".")[1]).id)
    //       );
          
    //     })
    //   }

    // })

    const handleChange = async(e) => {
      e.preventDefault();

      let obj = {
        title: title,
        subject: subject,
        startDate: startDate,
        endDate: endDate,
        maxStudentAllowed: maxStudLimit
      };

      create_session(obj).then((data) => {
        console.log(data);
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

        <>
          <div className="post-job-container text-left  dark:bg-[#2e2e2e] relative w-1/4 shadow-xl p-5 md:rounded-md mx-auto min-w-fitrounded-xl mt-10  bg-[#ffffff]">
            <div className="title ">
              <h1 className="m-10 text-3xl font-semibold text-indigo-600">
                {" "}
                Create Session{" "}
              </h1>
            </div>
            <div className="role">
              <label className="text-xl ml-10 font-medium ">
                Enter the title for session{" "}
              </label>
              <br />
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="role shadow-2xl p-3  text-xl ml-10 w-[85%] bg-white outline-none border-2 rounded-xl"
              />
            </div>

            <div className="company mt-5">
              <label className="text-xl ml-10 font-medium">
                Enter subject of session
              </label>
              <br />
              <input
                value={subject}
                type="text"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="company shadow-2xl p-3  ml-10 w-[85%] text-xl border-2 bg-white outline-none rounded-xl"
              />
            </div>

            <div className="jobtype mt-5">
              <label className="jobtype ml-10 text-xl font-medium ">
                Select start Date{" "}
              </label>
              <div className="ml-10">
              <DateTimePicker onChange={setStartDate} value={startDate} />
              </div>
            </div>

            <div className="jobmode mt-5">
              <label className="jobtype ml-10 text-xl font-medium ">
                Select end date
              </label>
              <div className="ml-10">
              <DateTimePicker onChange={setEndDate} value={endDate} />
              </div>
              
               
            </div>

            <div className="location mt-5">
              <label className="text-xl ml-10 font-medium">
                {" "}
                Enter Max Students allowed for session
              </label>
              <br />
              <input
                type="text"
                value={maxStudLimit}
                onChange={(e) => {
                  setMaxStudLimit(e.target.value);
                }}
                className="location p-3 border-2 shadow-2xl  ml-10 w-[85%] text-xl mb-10 bg-white outline-none rounded-xl"
              />
            </div>

            

            <button
              className="submit mb-5 p-3 border-2 shadow-2xl w-[85%] text-xl hover:bg-[#c0c0c0] ml-10 bg-white outline-none rounded-xl "
              type="submit"
              onClick={handleChange}
            >
              Submit
            </button>
          </div>
        </>

        

        
        
        </>
    )
}