
import { useContext } from "react";
import { GlobalStates } from "../GlobalStates";
import { Link } from "react-router-dom";

export default function Login() {

  const { setLoginState } = useContext(GlobalStates);

  return (
      <main className="justify-center">

            <Link to="/products"><button onClick={() => setLoginState(true)} className="btn1 text-4xl">Login</button></Link>
            <Link to="/signup"><a className="underline mt-5">not logged on?</a></Link>

      </main>
  )
}


