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
    <div className='flex justify-between p-3 border-b-[1px] border-orange-600'>
      {/*<Image
        src={logo}
        width={140}
        alt='logo'
        className='h-14 rounded-lg'
        onClick={()=>router.push('/')} />
  */}
  <div  className=' rounded-lg font-bold text-white ml-2 mt-3 text-[20px]'>
  <h1 onClick={()=>router.push('/')} className='cursor-pointer'>PLAYS<span className='text-blue-900'>GO</span></h1>
  </div>
      <div className='flex gap-4 p-1'>

        <button
          className='bg-blue-950 hover:bg-blue-900 p-2 px-3 rounded-md text-white'
          onClick={()=>router.push('/createpost')}
        >
          <span className='hidden sm:block'>Create Post</span>
          <HiOutlinePencilAlt className='sm:hidden text-[20px]' />
        </button>

        {!session ? <button className='bg-gray-100 p-2 px-3 border rounded-md border-black' onClick={() => signIn("google")}>
          <span className='hidden sm:block'>Sign In</span> <HiArrowLeftOnRectangle className='sm:hidden text-[20px]' />
        </button> : <button className='bg-gray-100 p-2 px-3 border rounded-md border-black' onClick={() => signOut()}>
          <span className='hidden sm:block'>Sign Out</span> <HiArrowLeftOnRectangle className='sm:hidden text-[20px]' />
        </button>}

        {session?  
       <Image src={session?session?.user?.image:USER_IMG} alt='user image'
        className='rounded-full cursor-pointer' onClick={()=>router.push('/profile')}
        width={40} height={40} />:null}
      </div>

    </div>
  )
}

export default Header;