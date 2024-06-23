import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Select from "../components/Select";
import Input from "../components/Input";
import RTE from "./RTE";
import app_service from "../../appwrite/service";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.slug || "",
        status: post?.status || "",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.user);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? app_service.createFile(data.image[0]) : null;
      console.log(file);
      if (file) {
        app_service.deleteFile(post.featuredImage);
      }
      const dbPost = await app_service.updateDocument(post.$id, {
        ...data,
      });
      if (dbPost) {
        navigate("/all-posts");
      }
    } else {
      const file = await app_service.createFile(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await app_service.createPost({
          ...data,
          userId: userData ? userData.$id : null,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <div className="py-20 w-full">
      <form onSubmit={handleSubmit(submit)} className="w-full">
        <div>
          <Input
            className="w-full mb-7 mt-2 border-2 text-lg  font-semibold font-primary"
            label="Title"
            labelStyle="block"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug"
            className="w-full border-2 mb-7 mt-2 text-lg font-semibold font-primary"
            placeholder="Your Slug"
            readOnly
            type="text"
            onInput={(e) => {
              setValue("slug", slugTransform(e.target.value), {
                shouldValidate: true,
              });
            }}
            {...register("slug", { required: true })}
          />
          <RTE
            label="Content :"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
        <div className="w-1/3 px-2">
          <Input
            label="Featured Image"
            labelStyle="mt-10"
            type="file"
            className=" font-primary mt-3"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="w-full mb-4">
              <img
                src={app_service.getfilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status"
            labelStyle="font-primary block font-semibold text-xl mb-3"
            defaultValue="active"
            className="mb-4 bg-black text-white p-2 mr-2 rounded-md px-3"
            {...register("status", { required: true })}
          />
          <Button
            type="submit"
            classname="w-full font-primary font-bold bg-black text-white rounded-lg my-4"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
