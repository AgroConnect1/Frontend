
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GlobalStates } from "../GlobalStates";


export default function Categories() {

  return (
      <main className="justify-start">
        <header id="top" className="w-screen h-20"/>
        <Navbar currentPage={2}/>

        <section className="h-screen">
          <h1 className="text-5xl mb-5">Categories</h1>
        </section>

        <Footer />
      </main>
  )
}


