import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 rounded-sm border">
      {/* Header */}

      <div className="flex items-center p-5">
            <img src={userImg} alt="" className="rounded-full w-12 h-12 object-contain border p-1 mr-3" />
            <p className="flex-1 font-bold">{username}</p>
            <DotsHorizontalIcon className="h-5"/>
      </div>

      {/* Img // */}
      <img src={img} alt=""  className="object-cover w-full"/>

      {/* Buttons  */}

      {/* Caption // */}

      {/* Comments // */}

      {/* Input box // */}
    </div>
  );
};

export default Post;
