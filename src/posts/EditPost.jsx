import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app_service from "../../appwrite/service";
import PostForm from "./PostForm";
function EditPost() {
  const [post, setposts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      app_service.getPost(slug).then((post) => {
        if (post) {
          setposts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <PostForm post={post} />
    </div>
  ) : null;
}

export default EditPost;
