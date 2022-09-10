import { register_session } from "../controllers/UserRoutes";


export default function SessionContainer(props) {

    function registerForSession() {
        let obj = {
            user_id: JSON.parse(atob(localStorage.getItem("user_token").split(".")[1]).id,
            ),
            session_id: props.id,
        };

        register_session(obj).then((data) => {
            alert(data.message);
            window.location.reload();
        })
    }
  return (
    <>
      <div className="job-container flex flex-row  shadow-2xl">
        <div className="role w-[50%] p-3 text-2xl font-medium ">
          {props.titleCon}
        </div>
        <div className="role w-[50%] p-3 text-2xl font-medium">
          {props.subjectCon}
        </div>
        <div className="role w-[50%] p-3 text-2xl font-medium">
          {props.startCon} - {props.endCon}
        </div>
        

        <button onClick={registerForSession} className="text-2xl font-semibold bg-indigo-500 p-2 rounded-xl m-5 text-white">
          Join Session
        </button>
      </div>
    </>
  );
}
