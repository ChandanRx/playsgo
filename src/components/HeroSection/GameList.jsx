"use client"
import React, { useEffect, useState } from 'react'
import Data from '../../shared/data'
import Image from 'next/image';

const GameList = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        setGames(Data.GameData)
    }, [])

    return (
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 mt-4'>
            {
                games.map((item) => (
                    <div className='flex flex-col items-center' key={item.name}>
                        <Image
                            className='bg-gray-400 p-1 rounded-full border border-orange-500 cursor-pointer hover:animate-bounce transition-all duration-150'
                            src={item.image}
                            alt="games"
                            width={50}
                            height={50}
                        />
                        <h2 className='text-white text-[14px] text-center'>{item.name}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default GameList