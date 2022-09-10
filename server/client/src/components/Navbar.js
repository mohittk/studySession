import {Link} from 'react-router-dom';




export default function Navbar ({active}) {
    let className_sessions = "m-3 p-2 rounded";
    let className_create_session = "m-3 p-2 rounded";
    let className_signup = "m-3 rounded p-2"
    let className_dashboard = "m-3 p-2 rounded";

    if (active === "jobs") {
        className_sessions += " text-blue-300";
      } else if (active === "post_a_job") {
        className_create_session += " text-blue-300";
      } else if (active === "signup") {
        className_signup += " text-blue-300";
      }
      // } else if (active === "dashboard") {
      //   className_dashboard += " text-blue-300";
      // }
      <div className="role w-[50%] p-3 text-2xl font-medium ">Connect Now</div>
    return (
        <>
        <div className="nav">
        <Link className="m-3" to="/"></Link>
        <Link className={className_sessions} to="/sessions">
          Sessions
        </Link>
        <Link className={className_create_session} to="/createSession">
          Create Session
        </Link>
        {localStorage.getItem("user_token") ? (
            <>
              {/* <Link className={className_dashboard} to="/applicant/dashboard">
                Dashboard
              </Link> */}
              <button
                className={className_signup}
                onClick={() => {
                  localStorage.removeItem("user_token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </>
          ) : (
          <Link className={className_signup} to="/signup">
            Signup
          </Link>
        )}
      </div>

{/*         
        <Link to="/"></Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/sessions">Sessions</Link>
         */}

        </>
    )
}