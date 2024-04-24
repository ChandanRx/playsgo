"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import Data from '../../shared/data'
import { useRouter } from 'next/navigation';
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import app from './../../../firebaseConfig'

const CreatePost = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [input, setInput] = useState({});

  const db = getFirestore(app)

  useEffect(() => {
    if (session) {
      setInput((value) => ({ ...value, userName: session?.user?.name }))
      setInput((value) => ({ ...value, userImage: session?.user?.image }))
      setInput((value) => ({ ...value, email: session?.user?.email }))
    }
  }, [session])

  const handleSubmitt = async (e) => {
 e.preventDefault();

  // if (!input.title || !input.desc || !input.date || !input.location || !input.game || !input.imageUrl) {
  //   console.error("All fields are required.");
  //   return;
  // }

  try {
    await setDoc(doc(db, "posts", Date.now().toString()), input);
    alert("Document successfully written!");
    window.location.reload()
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }))
  }

  return (

    
    <div className='md:w-[50%] lg:w-[40%] p-6 mt-8 lg:m-auto'>
    <p className='py-3 mb-4 text-center text-[30px] text-gray-200 font-bold'>Create Post</p>
      <div className="mt-4">
        <form className='flex flex-col text-center' onSubmit={handleSubmitt}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            onChange={handleChange}
            className="w-auto text-black mb-4 border-[1px] p-2 rounded-md"
          />
          <textarea
            name="desc"
            className="w-auto text-black mb-4 outline-blue-400 border-[1px] p-2 rounded-md"
            required
            onChange={handleChange}
            placeholder="Write Description here"
          />

          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
            className="w-auto text-black mb-4 border-[1px] p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            required
            onChange={handleChange}
            className="w-auto text-black mb-4 border-[1px] p-2 rounded-md"
          />
          <select
            name="game"
            required
            onChange={handleChange}
            className="w-auto text-black mb-4 border-[1px] p-2 rounded-md"
          >
            <option disabled defaultValue>
              Select Game
            </option>
            {Data.GameData.map((item) => (
              <option key={item.id}>{item.name}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder='Image Url'
            required
            name="imageUrl"
            className="mb-4 p-2 text-black rounded-md border-[1px] w-auto"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-900 w-auto p-2 rounded-md text-white"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}

export default CreatePost;
