"use client";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import app from "../../../firebaseConfig";
import PostItems from "../../components/PostItems";

const Profile = () => {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    if (session?.user?.email) {
      getUserPost();
    }
  }, [session]);

  const getUserPost = async () => {
    const q = query(
      collection(db, "posts"),
      where("email", "==", session?.user?.email)
    );
    const querySnapshot = await getDocs(q);
    const posts = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      posts.push(data);
    });
    setUserPost(posts);
  };

  const onDeletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    setUserPost((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <div className="p-6 mt-6">
      <h2 className="text-[30px] text-center font-extrabold text-yellow-300">
        Your Profile
      </h2>
      <p className="text-center text-yellow-100">Manage Your Game Posts</p>

      {userPost?.length === 0 ? (
        <p className="text-center text-white mt-6">No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 px-10 mb-4">
          {userPost.map((item) => (
            <div
              key={item.id}
              className="bg-yellow-200 p-2 rounded-xl shadow-md hover:bg-yellow-300 transition-all duration-300"
            >
              <PostItems post={item} />
              <button
                className="bg-red-700 w-full rounded-md text-white p-2 mt-2 hover:bg-red-600 font-semibold transition-colors duration-300"
                onClick={() => onDeletePost(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
