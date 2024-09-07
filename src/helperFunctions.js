
import React from 'react';
import { useState, useEffect } from 'react';



//////////////////////////////////////////////////////////////////////////////////


export function useWindowWidth() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};



//////////////////////////////////////////////////////////////////////////////////


export function useWindowHeight() {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowHeight;
};


//////////////////////////////////////////////////////////////////////////////////


  export function scrollTo(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


//////////////////////////////////////////////////////////////////////////////////
  