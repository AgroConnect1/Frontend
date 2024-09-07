import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalStates } from "../GlobalStates";
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowWidth } from '../helperFunctions';




export default function Navbar({currentPage = 1}) {

    const { loginState } = useContext(GlobalStates);

    const width = useWindowWidth();

    if(width >= 900 ) return(<FullNavbar currentPage={currentPage} loginState={loginState} />);
    else return(<SmallNavbar currentPage={currentPage} loginState={loginState} />);
}

function FullNavbar({currentPage, loginState}) {

    return(
        <>
            <nav className="bg-[var(--navbar-color)] fixed top-3 px-4 rounded-full backdrop-filter text-lg">
                <div className="h-16 flex flex-row items-center justify-between">
                    <img src="/AgroConnect.svg" alt="logo" className="w-36 ml-1"/>
                    <ul className="flex flex-row justify-center gap-2 lg:gap-5 text-center unselectabletext cursor-pointer">
                        <Link to="/"><li className={` ${currentPage === 1 ? `bg-white` : `bg-transparent`} px-[0.7em] py-[0.2em] rounded-full nav-element`}>Home</li></Link>
                        <Link to="/categories"><li className={` ${currentPage === 2 ? `bg-white` : `bg-transparent`} px-[0.7em] py-[0.2em] rounded-full nav-element`}>Categories</li></Link>
                        <Link to="/products"><li className={` ${currentPage === 3 ? `bg-white` : `bg-transparent`} px-[0.7em] py-[0.2em] rounded-full nav-element`}>Products</li></Link>
                        <Link to="/about"><li className={` ${currentPage === 4 ? `bg-white` : `bg-transparent`} px-[0.7em] py-[0.2em] rounded-full nav-element`}>About</li></Link>
                        <Link to="/support"><li className={` ${currentPage === 5 ? `bg-white` : `bg-transparent`} px-[0.7em] py-[0.2em] rounded-full nav-element`}>Support</li></Link>
                        <Link to="/cart"><li className={` ${currentPage === 6 ? `bg-white` : `bg-transparent`} px-[0.7em] py-[0.2em] rounded-full nav-element`}>Cart</li></Link>
                    </ul>
                     {loginState ? 
                     <Link to="/account"><span className="material-symbols-rounded cursor-pointer whiten-onhover text-4xl">account_circle</span></Link>
                     :
                     <Link to="/login"><button className="btn3">Login</button></Link>
                     }
                </div>
            </nav>
                
        </>
    );
}



function SmallNavbar({currentPage, loginState}) {

    const [dropMenu, setDropMenu] = useState(false);

    return(
        <>
            <nav className="bg-[var(--navbar-color)] fixed top-3 px-4 rounded-full backdrop-filter">
                <div className="h-14 flex flex-row items-center justify-between">
                    {loginState ? 
                     <Link to="/account"><span className="material-symbols-rounded cursor-pointer whiten-onhover text-4xl">account_circle</span></Link>
                     :
                     <Link to="/login"><button className="btn3 text-sm md:text-base">Login</button></Link>
                     }
                    <img src="/AgroConnect.svg" alt="logo" className="w-32 md:w-36"/>
                    <span className="material-symbols-rounded cursor-pointer whiten-onhover text-3xl md:text-4xl ml-5" onClick={() => setDropMenu(prev => !prev)}>
                        menu
                    </span>
                </div>
            </nav>

            <AnimatePresence>
            {dropMenu && 
            <motion.div
                className="fixed top-20 right-3 bg-[var(--navbar-color)] backdrop-filter rounded-3xl px-2 py-2 unselectabletext"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
                <ul className="flex flex-col justify-center gap-2 text-lg text-center cursor-pointer">
                    <Link to="/"><li className={` ${currentPage === 1 ? `bg-white` : `bg-transparent`} px-2 py-1 rounded-full nav-element`}>Home</li></Link>
                    <Link to="/categories"><li className={` ${currentPage === 2 ? `bg-white` : `bg-transparent`} px-2 py-1 rounded-full nav-element`}>Categories</li></Link>
                    <Link to="/products"><li className={` ${currentPage === 3 ? `bg-white` : `bg-transparent`} px-2 py-1 rounded-full nav-element`}>Products</li></Link>
                    <Link to="/about"><li className={` ${currentPage === 4 ? `bg-white` : `bg-transparent`} px-2 py-1 rounded-full nav-element`}>About</li></Link>
                    <Link to="/support"><li className={` ${currentPage === 5 ? `bg-white` : `bg-transparent`} px-2 py-1 rounded-full nav-element`}>Support</li></Link>
                    <Link to="/cart"><li className={` ${currentPage === 6 ? `bg-white` : `bg-transparent`} px-2 py-1 rounded-full nav-element`}>Cart</li></Link>
                </ul>
            </motion.div>
            }
            </AnimatePresence>
        </>
    );
}
