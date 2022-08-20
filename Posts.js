import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "ShivamKumar962",
    userImg:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Subscribe and Hit the Like button",
  },

  {
    id: "123",
    username: "ShivamKumar962",
    userImg:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Subscribe and Hit the Like button",
  },
];

const Posts = () => {
  return (
    <div>
    { posts.map((post) =>( 
      <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
      ))}
    </div>
  );
};

export default Posts;
