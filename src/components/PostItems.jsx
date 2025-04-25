'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { HiLocationMarker, HiOutlineCalendar } from 'react-icons/hi'
import { motion } from 'framer-motion'

const PostItems = ({ post }) => {
    const { data: session } = useSession()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
            className="max-w-sm w-full rounded-xl cursor-pointer overflow-hidden border border-yellow-500 bg-gray-900 shadow-md hover:shadow-yellow-400/40 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
            <img
                className="w-full h-[180px] object-cover border-b border-yellow-500"
                src={post?.imageUrl}
                alt="poster"
            />

            <div className="p-5 text-gray-100">
                <h5 className="mb-2 text-2xl font-semibold text-yellow-400">{post?.title}</h5>

                <div className="flex items-center gap-2 mb-3 text-yellow-300 text-sm">
                    <HiOutlineCalendar className="text-lg" />
                    <span>{post?.date}</span>
                </div>

                <div className="flex items-center gap-2 mb-3 text-gray-300 text-sm">
                    <HiLocationMarker className="text-lg" />
                    <span>{post?.location}</span>
                </div>

                <p className="mb-4 text-gray-400 text-sm leading-relaxed">{post?.desc}</p>

                <div>
                    <p className="font-semibold text-yellow-300 mb-2 text-sm">Posted By:</p>
                    <div className="flex items-center gap-3">
                        <Image
                            src={post?.userImage}
                            alt="user-image"
                            width={40}
                            height={40}
                            className="rounded-full border border-yellow-400"
                        />
                        <div>
                            <h2 className="text-[14px] font-medium text-gray-100">{post?.userName}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PostItems
