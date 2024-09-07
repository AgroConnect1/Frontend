
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GlobalStates } from "../GlobalStates";


export default function Account() {

  return (
      <main className="flex flex-col justify-start items-center">
        <header id="top" className="w-screen h-20" />
        <Navbar currentPage={0}/>
          <div className="border border-[var(--font-color)] w-60 h-60 mb-5" />
          <div className="border border-[var(--font-color)] w-60 h-60 mb-5" />
          <div className="border border-[var(--font-color)] w-60 h-60 mb-5" />
          <div className="border border-[var(--font-color)] w-60 h-60 mb-5" />
          <div className="border border-[var(--font-color)] w-60 h-60" />
        <Footer />
      </main>
  )
}


