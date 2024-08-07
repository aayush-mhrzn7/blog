import React from "react";
import { Link } from "react-router-dom";
import app_service from "../../appwrite/service";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-slate-100 shadow-md rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={app_service.getfilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl text-center mt-2 font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
