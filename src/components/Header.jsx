"use client"
import Image from 'next/image';
import React from 'react'
import logo from '../../assets/Images/logoX.png'
const USER_IMG = 'https://img.jagranjosh.com/imported/images/E/GK/dhoni-records-odi.webp'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession()
  return (
<div className="sticky top-0 z-[999] bg-[#333333] flex justify-between p-3 border-b border-[#FBBF24] shadow-md">

{/* Logo */}
<div className="rounded-lg font-bold text-[#FFD700] ml-2 mt-3 text-[22px] tracking-wide">
  <h1 onClick={() => router.push('/')} className="cursor-pointer transition-all hover:scale-105">
    PLAYS<span className="text-black bg-[#FFD700] px-1 py-0.5 rounded">GO</span>
  </h1>
</div>

{/* Right Side Buttons */}
<div className="flex gap-4 p-1">

  {/* Create Post Button */}
  <button
    className="bg-[#1c1c1c] text-[#FFD700] hover:text-black hover:bg-[#FFD700]  px-4 py-2 rounded-md shadow-md 
               hover:scale-105 
               transition-all duration-300 ease-in-out
               flex items-center gap-2"
    onClick={() => router.push('/createpost')}
  >
    <span className="hidden sm:block">Create Post</span>
    <HiOutlinePencilAlt className="sm:hidden text-[20px]" />
  </button>

  {/* Sign In / Sign Out Button */}
  {!session ? (
    <button
      className="px-4 py-2 rounded-md shadow-md hover:shadow-lg
                  text-[#1c1c1c] bg-[#FFD700] hover:text-[#FFD700] hover:bg-[#1c1c1c] hover:scale-105
                 transition-all duration-300 ease-in-out
                 flex items-center gap-2"
      onClick={() => signIn("google")}
    >
      <span className="hidden sm:block">Sign In</span>
      <HiArrowLeftOnRectangle className="sm:hidden text-[20px]" />
    </button>
  ) : (
    <button
   className="px-4 py-2 rounded-md shadow-md hover:shadow-lg
                 text-[#1c1c1c] bg-yellow-600 hover:text-yellow-300 hover:bg-[#1c1c1c] hover:scale-105
                 transition-all duration-300 ease-in-out
                 flex items-center gap-2"
      onClick={() => signOut()}
    >
      <span className="hidden sm:block">Sign Out</span>
      <HiArrowLeftOnRectangle className="sm:hidden text-[20px]" />
    </button>
  )}

  {/* User Image */}
  {session && (
    <Image
      src={session?.user?.image || USER_IMG}
      alt="user image"
      className="rounded-full cursor-pointer border-2 border-[#FBBF24]"
      width={40}
      height={40}
      onClick={() => router.push('/profile')}
    />
  )}
</div>
</div>

  )
}

export default Header;