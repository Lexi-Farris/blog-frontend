import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./Modal";
import { PostShow } from "./PostShow";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";

export function Content() {
  // posts is an ARRAY
  // setPosts is a FUNCTION
  //functions are created under the hood. It is resetting the value of the variable.
  // useState([]);: default state. This array will start off as empty
  const [posts, setPosts] = useState([]);

  // _________________
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const postFullList = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      // setPosts is a function that allows our post array to change BY pushing in information from an array. The array is called (response.data)
      setPosts(response.data);
    });
  };

  //Creates a function, if modal will pop up
  //function expects info (paramenter to be passed to it)
  const handleShowPost = (post) => {
    console.log(post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  //Creates a function, when modal will close
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };
  // React hook used to manage 'side effects'; runs function at specific moment in time w/o user needing to do anything
  useEffect(postFullList, []);

  const handleCreatePost = (params, successCallback) => {
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        setPosts([...posts, response.data]);
        //after you push the API response into the posts variable, call//activate the successCallback function
        successCallback();
        window.location.href = "/posts"; // creates the build in 'toast' pop up
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setCurrentPost(response.data);
      setPosts(
        // map through the posts array on the actual page. If the posts that are on the page have NOT been updated; don't do anything, just return them as is. IF the post HAS been updated, updated that post on the page with the changes we just made.
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      // closes modal after update
      handleClose();
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      console.log(post.data);
      setPosts(posts.filter((p) => p.id !== post.id));
      handleClose();
    });
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/posts" element={<PostIndex blogPosts={posts} onShowPost={handleShowPost} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PostIndex blogPosts={posts} onShowPost={handleShowPost} />} />
        {/* NOT DONE>>>>> <Route path="/posts/:id" /> */}
        <Route path="posts/new" element={<PostNew onCreatePost={handleCreatePost} />} />
      </Routes>

      {/* Below code:
                  is passing in props in key/value pairs
            - posts IS an ARRAY, this is allowing us to share the information with PostIndex
            -postIndex IS our FUNCTION name (file name)
            */}

      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
