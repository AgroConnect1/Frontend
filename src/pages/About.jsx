
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GlobalStates } from "../GlobalStates";


export default function About() {

  return (
      <main className="justify-start">
        <header id="top" className="w-screen h-20"/>
        <Navbar currentPage={4}/>

        <h1 className="text-4xl text-left mb-5 w-full ml-20">About us</h1>
        <section className="h-fit my-5 mx-10 flex justify-between flex-col md:flex-row">
          <div className="w-10/12 mx-auto md:w-6/12">
            We seek improving the agricultural market locally and decrease the waste and improve the produce quality. <br /> <br />
            Our agriculture marketplace is a web platform designed to connect farmers with consumers. By leveraging data analysis, the platform predicts which crops are in demand, reducing waste and spoilage as the market expands. <br /> <br />
            The platform aims to provide farmers with a broader market for their produce while helping them optimize production and pricing through data-driven insights. Consumers benefit from personalized recommendations, making their shopping experience more relevant and efficient.
          </div>
          <img src="../../public/about-img.png" 
            alt="About us Image" 
            className="w-80 h-80 scale-x-[-1] mx-auto -z-10"/>
        </section>

        <Footer />
      </main>
  )
}


