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
    <div className="grid grid-cols-4 gap-16 my-20 max-xl:grid-cols-2 max-sm:grid-cols-1">
      {posts.map((post) => (
        <div key={post.$id}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default AllPost;
