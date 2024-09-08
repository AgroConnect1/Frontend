
import { scrollTo } from "../helperFunctions";
import { GlobalStates } from "../GlobalStates";

export default function Footer() {
    return(

        <footer className="pt-20 flex flex-col justify-center">
            <p className="text-center text-sm font-medium border-black ustify-center items-center gap-3 px-5">
                Developed by AgroConnect team
                <span className="font-normal"> &copy; </span>
                {new Date().getFullYear()}, all rights reserved.
            </p>
            <div className="bg-[var(--navbar-color)] my-3 px-5 h-14 rounded-full flex justify-center items-center">
                <img src="/AgroConnect.svg" alt="logo" className="w-32 md:w-36"/>
                <button onClick={() => scrollTo("top")}  className="absolute right-6 btn3">
                  <span className="material-symbols-rounded flex items-center justify-center">arrow_upward</span>
                </button>
            </div>
        </footer>
    );
}