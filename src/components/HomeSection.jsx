"use client"
import React, { useEffect, useState } from 'react';
import Hero from './HeroSection/Hero';
import Search from './HeroSection/Search';
import GameList from './HeroSection/GameList';
import app from '../../firebaseConfig';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Posts from './HeroSection/Posts';

const HomeSection = () => {
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const fetchedPosts = [];
    querySnapshot.forEach((doc) => {
      fetchedPosts.push(doc.data());
    });
    setPosts(fetchedPosts);
  };

  // Function to handle search
  const handleSearch = async (searchText) => {
    try {
      const q = query(collection(db, 'posts'), where('game', '==', searchText));
      const querySnapshot = await getDocs(q);
      const searchResults = [];
      querySnapshot.forEach((doc) => {
        searchResults.push(doc.data());
      });
      setPosts(searchResults);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  return (
    <div className='px-5 sm:px-7 md:px-10 mt-9'>
      <Hero />
      {/* Pass the handleSearch function to the Search component */}
      <Search onSearch={handleSearch} />
      <GameList />
      <Posts posts={posts} />
    </div>
  );
};

export default HomeSection;
