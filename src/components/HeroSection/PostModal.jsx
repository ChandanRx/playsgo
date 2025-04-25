"use client"
import React from 'react'
import { HiLocationMarker, HiOutlineCalendar, HiOutlineXCircle } from 'react-icons/hi'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const PostModal = ({ post }) => {
  const { data: session } = useSession()

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-yellow-200 text-[#1a1a1a] p-0 border-2 border-[#1a1a1a] shadow-xl animate-fadeSlideIn">
          <div className="modal-action m-0 p-0 relative">
            <form method="dialog" className="w-full">
              {/* Close Button */}
              <button className="absolute right-3 top-3 hover:text-red-500 transition-colors">
                <HiOutlineXCircle className="text-[30px] text-[#1a1a1a] hover:text-red-500" />
              </button>

              <div className="border-t border-yellow-600">
                {/* Image */}
                <img
                  className="w-full h-[180px] object-cover border-b border-yellow-600"
                  src={post?.imageUrl}
                  alt="poster"
                />

                {/* Content with Tailwind animation */}
                <div className="p-4 transition-all duration-500 ease-out animate-fadeSlideIn">
                  <h5 className="text-xl font-bold text-[#1a1a1a] mb-3">{post?.title}</h5>

                  <div className="flex items-center gap-2 text-[#1a1a1a] mb-2 text-sm">
                    <HiOutlineCalendar className="text-lg" />
                    {post?.date}
                  </div>

                  <div className="flex items-center gap-2 text-[#1a1a1a] mb-3 text-sm">
                    <HiLocationMarker className="text-lg" />
                    {post?.location}
                  </div>

                  <p className="text-sm mb-4 text-[#1a1a1a]">
                    If you're interested, contact using the details below. Hurry up!
                  </p>

                  <div className="border-t border-yellow-600 mb-4" />

                  {/* User Info */}
                  <div className="flex gap-3 items-center">
                    <Image
                      src={post?.userImage}
                      alt="user-image"
                      width={40}
                      height={40}
                      className="rounded-full border border-yellow-400"
                    />
                    <div>
                      <h2 className="text-[14px] font-semibold">{post?.userName}</h2>
                      <h2 className="text-[13px] font-light">{post?.email}</h2>
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
