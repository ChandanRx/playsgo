"use client"
import React from 'react'
import { HiLocationMarker, HiOutlineCalendar, HiOutlineXCircle} from 'react-icons/hi'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const PostModal = ({ post }) => {
    const {data:session} = useSession()
    return (
        <div>
            <dialog id="my_modal_1" className="modal rounded-lg">
                <div className="modal-box">
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="absolute right-2 top-2">
                                <HiOutlineXCircle className='text-[32px] text-red-800' />
                            </button>
                            <div className="max-w-sm border border-gray-500 rounded-lg shadow bg-gradient-to-r from-gray-100 to-slate-200">
                                <img className="rounded-t-lg w-full h-[180px] border border-gray-400" src={post?.imageUrl} alt="poster" />
                                <div className="p-5">

                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-950">{post?.title}</h5>

                                    <div className='flex items-center text-blue-900 gap-2 mb-2'>
                                        <HiOutlineCalendar className='text-[20px]' />
                                        {post?.date}
                                    </div>

                                    <div className='flex items-center text-gray-800 gap-2 mb-2'>
                                        <HiLocationMarker className='text-[20px]' />
                                        {post?.location}
                                    </div>

                                    <p className="mb-2 font-normal text-gray-800">
                                        if you're intrested contact on below details hurry up....
                                    </p>

                                    <div className='border' />

                                    <div className='flex gap-2 items-center mt-2 text-blue-950'>

                                        <Image src={session?.user?.image} alt='user-image'
                                            width={40} height={40} className='rounded-full' />
                                        <div>
                                            <h2 className='text-[14px] font-medium'>{session?.user?.name}</h2>
                                            <h2 className='text-[14px] font-light'>{session?.user?.email}</h2>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default PostModal