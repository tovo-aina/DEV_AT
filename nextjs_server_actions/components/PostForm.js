"use client";

// import { createPost } from "@/actions/postActions";
import { useRef } from "react";
import ButtonSubmit from "@/components/ButtonSubmit";

const PostForm = () => {
  const formRef = useRef();

  async function handleAction(formData) {
    // "use server";
    const title = formData.get("title");
    const image = formData.get("image");

    await createPost({ title, image });

    formRef.current.reset();

    // console.log({ "server action": { title, image } });
    // console.log({ "server client": { title, image } });
  }

  return (
    <form
      style={{ display: "flex", gap: 20, margin: "30px 0" }}
      action={handleAction}
      ref={formRef}
    >
      <input type="text" name="title" placeholder="title" required />

      <input type="text" name="image" placeholder="image" required />

      <ButtonSubmit value="Create" />
    </form>
  );
};

export default PostForm;
