import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Course({ courseDetails: { title, image, description } }) {
  const [like, setLike] = useState(false);

  function handleClick() {
    setLike(!like);

    if (like) {
      toast.info("Course Disliked");
    } else {
      toast.success("Course Liked");
    }
  }

  return (
    <div className="w-[22%] bg-bgDark rounded-md m-5 ">
      <div className="relative">
        <img
          src={image.url}
          alt={image.alts}
          className="block w-[100%] rounded-md"
        />
        <div
          className="bg-white absolute rounded-full p-1 flex justify-center items-center right-3 -bottom-5"
          onClick={handleClick}
        >
          {like ? (
            <FcLike size={"1.8rem"} />
          ) : (
            <FcLikePlaceholder size={"1.8rem"} />
          )}
        </div>
      </div>
      <div className="text-white p-3">
        <h3 className="font-bold mb-2">{title}</h3>
        <p>{description.slice(0, 100) + "..."}</p>
      </div>
    </div>
  );
}

export default Course;
