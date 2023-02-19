import Hiring from '../assets/hiring.svg'
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

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
const storage = getStorage(app);
const db = getFirestore(app);

const Recruit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [apply, setApply] = useState('');

  const handleApplyChange = event => {
    setApply(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleResumeChange = event => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // Write the form data to the Firestore database
    try {
      if (resume) {
        const file = `resumes/${resume.name + v4()}`;
        const resumeRef = ref(storage, file);
        await uploadBytes(resumeRef, resume).then(()=>{
          console.log("Resume Uploaded!");
        })
        // Update the Firestore document with the resume URL
        await getDownloadURL(ref(storage, file)).then((url)=>{
          addDoc(collection(db, "recruitment"), {
            name,
            email,
            apply,
            resumeUrl: url,
          });
        })
        
      }
      // Reset the form fields
      setName('');
      setEmail('');
      setApply('');
      setResume(null);
    } catch (error) {
      console.error(error);
    }
    }
  return (
    <div className='bg-[#344A53] md:h-screen h-full md:p-[125px] h-fit' id='recruit'>
      <h1 className='md:text-5xl text-2xl text-center pt-6 md:p-[80px] font-bold text-white'>Join Our Team!</h1>
      <div className='md:flex justify-between'>

        <div>
        <img src={Hiring} alt="hiring" className='scale-75 md:scale-100'/>
      </div>
      <div class="w-full md:w-96 md:max-w-full mx-auto">
  <div class="p-6 md:border border-gray-300 sm:rounded-md drop-shadow-lg">
    <form>
      <label class="block mb-6">
        <span class="text-white font-bold text-xl">Name</span>
        <input input type="text" value={name} onChange={handleNameChange} 
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
              id="exampleFormControlInput1"
              placeholder="Name"/>
      </label>
      <label class="block mb-6">
        <span class="text-white font-bold text-xl">Email address</span>
        <input type="email" value={email} onChange={handleEmailChange}
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
              id="exampleFormControlInput1"
              placeholder="Email address"/>
      </label>
      <label class="block mb-6">
        <span class="text-white font-bold text-xl">Applying for</span>
        <select
        value={apply} onChange={handleApplyChange}
          required
          name="apply"
          class="
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
        >
          <option>-----Select----</option>
          <option>Graphic Designer</option>
          <option>App Developer</option>
          <option>Web Developer</option>
          <option>Social Media</option>
          <option>Marketing</option>
        </select>
      </label>
      <label class="block mb-6">
        <span class="text-white font-bold text-xl">Resume</span>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange}
          required
          name="cv"
          class="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
        />
      </label>
      <div class="mb-6">
        <button onClick={handleSubmit}
          type="submit"
          class="
            h-10
            px-5
            text-[#2F2E41]
            bg-[#92DDFA]
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-[#00b5fc]
          "
        >
          Apply
        </button>
      </div>
      <div>
      </div>
    </form>
  </div>
</div>
    </div>
    </div>
  )
}

export default Recruit