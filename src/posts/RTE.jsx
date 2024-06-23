import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

//real time editor

function RTE({ name, control, label, defaultValue = "empty" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block font-semibold font-primary text-xl my-1 pb-1">
          {label}
        </label>
      )}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="gcy8jl690wu4oyfj83dpknp0rb1b1l6vot1k7h2si7o22zlq"
            initialValue={defaultValue}
            init={{
              branding: false,
              height: 800,

              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
