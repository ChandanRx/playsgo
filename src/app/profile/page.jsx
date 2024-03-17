"use client"
import { collection, deleteDoc, doc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import app from '../../../firebaseConfig'
import PostItems from '../../components/PostItems'

const profile = () => {
    const { data: session } = useSession()
    const db = getFirestore(app)
    const [userPost, setUserPost] = useState([]);
    useEffect(() => {
        getUserPost()
    }, [session])

    const getUserPost = async () => {
        if (session?.user?.email) {
            const q = query(collection(db, "posts"), where("email", "==", session?.user?.email))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                setUserPost(userPost => [...userPost, data])
            })
        }
    }

    const onDeletePost = async (id) =>{
        await deleteDoc(doc(db,"posts",id))
        window.location.reload()
    }

    return (
        <div className='p-6 mt-6'>
            <h2 className='text-[30px] text-center font-extrabold text-gray-200'>Profile</h2>
            <p className='text-center text-white'>Manage Your Posts</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 px-10 mb-4'>
                {
                    userPost && userPost?.map((item) => (
                        <div key={item.name}>
                            <PostItems post={item} />
                            <button className='bg-red-700 w-full rounded-md text-white p-1 mt-1 hover:bg-red-600'
                            onClick={()=>onDeletePost(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default profile