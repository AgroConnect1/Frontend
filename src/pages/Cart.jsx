

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GlobalStates } from "../GlobalStates";


export default function Cart() {

  // a state to store the products cards elements 
  const [productCards, setProductCards] = useState(null);

  // json fetching
  // runs only when the component is mounted
  useEffect(() => {
    fetch("src/testingData.json")
      .then(response => {
        if (!response.ok) throw new Error("Couldn't fetch the resource");
        return response.json();
      })
      .then(data => {
        const productsArray = data.map((product, index) => <Card data={product} key={index} />);
        setProductCards(productsArray);
      })
      .catch(error => console.error(error));
  }, []);


  return (
      <main className="justify-start">
        <header id="top" className="w-screen h-20" />
        <Navbar currentPage={6}/>

        <h1 className="text-5xl mb-5">Cart</h1>
        {productCards}
        
        <Footer />
      </main>
  );
}


function Card({data}) {
  return(
    <div className="border border-[var(--font-color)] w-60 h-60 mb-5">
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} draggable="false" />
    </div>
  );
}





