import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const searchButtonOnClick = () => {
    onSearch(searchText);
  };

  return (
    <div className="mt-8 w-full max-w-xl mx-auto">
      <label
        htmlFor="game-search"
        className="mb-2 text-sm font-medium text-yellow-400 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
            />
          </svg>
        </div>
        <input
          id="game-search"
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search games nearby..."
          className="w-full p-4 pl-10 text-sm rounded-xl text-[#1c1c1c] bg-yellow-100 placeholder-yellow-700 border border-yellow-300 focus:ring-yellow-500 focus:border-yellow-600 transition-all duration-300"
        />
        <button
          onClick={searchButtonOnClick}
          type="button"
          className="absolute right-2.5 bottom-2.5 bg-[#1c1c1c] text-[#FFD700] hover:text-black hover:bg-[#FFD700] font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
