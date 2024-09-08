
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GlobalStates } from "../GlobalStates";


export default function Support() {

  return (
      <main className="flex flex-col justify-start items-center">
        <header id="top" className="w-screen h-20"/>
        <Navbar currentPage={5}/>

        <section className="h-screen">
          <h1 className="text-5xl mb-5">Support</h1>
        </section>

        <Footer />
      </main>
  )
}


