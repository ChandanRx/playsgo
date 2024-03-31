"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { HiLocationMarker, HiOutlineCalendar } from 'react-icons/hi'

const PostItems = ({ post }) => {
    const { data: session } = useSession()
    return (

        <div className="max-w-sm border border-gray-500 rounded-lg shadow bg-gradient-to-r from-slate-100 to-gray-200">
            <img className="rounded-t-lg w-full h-[180px] border border-gray-400" src={post?.imageUrl} alt="poster" />
            <div className="p-5">

                <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-950">{post?.title}</h5>

                <div className='flex items-center gap-2 mb-2 text-blue-900'>
                    <HiOutlineCalendar className='text-[20px]' />
                    {post?.date}
                </div>

                <div className='flex items-center gap-2 mb-2 text-gray-800'>
                    <HiLocationMarker className='text-[20px]' />
                    {post?.location}
                </div>

                <p className="mb-2 font-normal text-gray-700">{post?.desc}</p>
                <div>
                    <p className='font-bold text-blue-900'>Posted By :</p>

                    <div className='flex gap-2 items-center mb-3 mt-2 text-black'>

                        <Image src={post?.userImage} alt='user-image'
                            width={40} height={40} className='rounded-full' />
                        <div>
                            <h2 className='text-[14px] font-medium'>{post?.userName}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PostItems