
import { useContext } from "react";
import { GlobalStates } from "../GlobalStates";
import { Link } from "react-router-dom";

export default function Signup() {

  const { setLoginState } = useContext(GlobalStates);

    return (
      <main className="flex flex-col h-screen w-screen justify-center items-center gap-5">
        <Link to="/products"><button onClick={() => setLoginState(true)} className="btn1 text-4xl">Sign-up</button></Link>

      </main>
    )
  }
  
  
  