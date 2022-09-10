import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import {useState, useEffect} from 'react';
import {get_sessions} from '../controllers/SessionRoutes';
import SessionContainer from '../components/SessionContainer';

export default function Sessions() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [sessions, setSessions] = useState([]);

  useEffect(() => { 
    get_sessions().then((data) => {
      console.log(data.message);
      setSessions(data.message);
    })

  }, []);

  
    return(
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

        <div className="find-jobs-container bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-10">
            <h2 className="text-3xl font-semibold  m-5 text-indigo-600">
              Join Study sessions
            </h2>

            <div className="show-jobs-container bg-white shadow-2xl rounded-xl  p-16">
            <h2 className="text-3xl font-semibold  m-5 text-indigo-600"> </h2>
            <div className="job-container flex flex-row shadow-2xl">
              <div className="role w-[50%] p-3 text-2xl font-medium "> Session Name </div>
              <div className="role w-[50%] p-3 text-2xl font-medium ">Topic of Study</div>
              <div className="role w-[50%] p-3 text-2xl font-medium ">Duration </div>
              <div className="role w-[50%] p-3 text-2xl font-medium ">Connect Now</div>
            </div>
            {
              sessions ? (sessions.map((det) => {
                return (
                <SessionContainer titleCon={det.title}  subjectCon={det.subject} startCon={det.startDate} endCon={det.endDate}/>
                )
              })
              ) : (
                <>
                NO sessions
                </>
              )

            }
            
         
            
          </div>
          

           
          </div>


        


        </>
    )
}