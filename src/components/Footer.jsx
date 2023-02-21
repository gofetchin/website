import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyD9hdVNVydE_OPdaZRRgYZ6h5Va6fK4kGM",
    authDomain: "fetch-e1aac.firebaseapp.com",
    projectId: "fetch-e1aac",
    storageBucket: "fetch-e1aac.appspot.com",
    messagingSenderId: "621871054246",
    appId: "1:621871054246:web:9d7eec3ea5b1b164662367",
    measurementId: "G-P87D1K6YZ7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Footer = () => {
  const [nlemail, setNlemail] = useState('');

  const handleNlemailChange = event => {
    setNlemail(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try{
      await addDoc(collection(db, "newsletter"), {
        nlemail
      });
      setNlemail('');
    }
    catch{
      console.log("Error!");
    }
    }

  return (
    <div id='contact'>
        <footer className="text-center bg-gray-900 text-white max-width-screen">
  <div className="container px-6 pt-6">
    <div>
      <form action="">
        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
          <div className="md:ml-auto md:mb-6">
            <p className="">
              <strong>Sign up for Fetch newsletter</strong>
            </p>
          </div>

          <div className="md:mb-6">
            <input value={nlemail} onChange={handleNlemailChange} 
              type="email"
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="newslestter_email"
              placeholder="Email address"/>
          </div>

          <div className="md:mr-auto mb-6">
            <button type="submit" onClick={handleSubmit} className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>

    <div className='flex p-10'>
    <div>
        Phone: <a href="tel:+916309412450">(+91) 6309412450</a> <br/>
        Email: <a href="mailto:vatika@gofetch.in">vatika@gofetch.in</a> 
    </div>

    </div>

  </div>

  <div className="text-center p-4 bg-[#000000]">
    © 2023 Copyright: Fetch
  </div>
</footer>
    </div>
  )
}

export default Footer