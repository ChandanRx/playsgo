import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const searchButtonOnClick = () => {
        onSearch(searchText);
    };

    return (
        <div className='mt-7'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Search here by game name..."
                    required
                />
                <button
                    onClick={searchButtonOnClick}
                    type="button"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-950 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-xl text-sm px-4 py-2"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
