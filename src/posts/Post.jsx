import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import app_service from "../../appwrite/service";

import Button from "../components/Button";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.user);
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  useEffect(() => {
    if (slug) {
      app_service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    app_service.deleteDocument(slug).then(() => {
      navigate("/");
    });
  };

  return post ? (
    <div className="py-8">
      <div>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={app_service.getfilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl "
          />

          {isAuthor && (
            <div className="absolute right-6 top-6 ">
              <Link to={`/edit-post/${post.$id}`}>
                <Button classname="mr-3 bg-green-400 text-black w-full">
                  Edit
                </Button>
              </Link>
              <Button
                classname="mr-3 mt-3 bg-red-400 text-black w-full"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-4xl font-primary font-bold">{post.title}</h1>
        </div>
        <div className="browser-css font-primary text-2xl">
          {parse(post.content)}
        </div>
      </div>
    </div>
  ) : null;
}
