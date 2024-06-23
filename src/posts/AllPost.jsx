import React, { useEffect, useState } from "react";
import app_service from "../../appwrite/service";
import PostCard from "./PostCard";
function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    app_service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  return (
    <div className=" justify-center items-center flex flex-wrap text-center">
      {posts.map((post) => (
        <div key={post.$id} className="p-2 mt-5 w-[400px] h-[400px]">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default AllPost;
