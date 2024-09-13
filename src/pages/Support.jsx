
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GlobalStates } from "../GlobalStates";


export default function Support() {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    problem: ""
  })

  function handleChange(event) {
    const {name, value} = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <main className="justify-between">
    <header id="top" className="w-screen h-20"/>
    <Navbar currentPage={5}/>

    <h1 className="text-4xl text-left mb-5 w-full ml-20 font-medium">Support</h1>
    <section className="h-fit my-5 mx-11 flex justify-around flex-col md:flex-row w-4/5 gap-x-12 ">
      <div className="w-10/12 mx-auto">
        <h2 className="text-2xl font-normal">Email us</h2>
        <p className="mb-7 mt-2">If you have any issue with our website or any problem or bug, don’t hesitate to email us!</p>
        <form action="" onSubmit={handleSubmit} className="flex flex-col items-center	gap-y-4 w-fit mx-auto md:ml-8">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="name" className="self-start	ml-3 ">Name</label>
            <input type="text" 
                   id="name" 
                   name="name" 
                   value={data.name} 
                   onChange={handleChange} 
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email" className="self-start ml-3 ">Email</label>
            <input type="email" 
                   id="email" 
                   name="email" 
                   value={data.email} 
                   onChange={handleChange} 
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="phone" className="self-start ml-3 ">Phone Number</label>
            <input type="number" 
                   id="phone" 
                   name="phone" 
                   value={data.phone} 
                   onChange={handleChange} 
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="problem" className="self-start ml-3 ">Write your problem or bug</label>
            <textarea id="problem" 
                      name="problem" 
                      value={data.problem} 
                      onChange={handleChange}> 
            </textarea>
          </div>
          <button className="btn2" type="submit" >Send</button>
        </form>
      </div>
      <div className="w-80 h-80 mt-4 mx-auto self-center">
        <img src="../../public/support-svgrepo-com.svg" alt="Support Image" />
      </div>
    </section>

    <Footer />
  </main>
  )
}


