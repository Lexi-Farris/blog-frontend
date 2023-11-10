import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./Modal";


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



  return (
    <div className="container">
      <PostNew />

      {/* Below code:
                  is passing in props in key/value pairs
            - posts IS an ARRAY, this is allowing us to share the information with PostIndex
            -postIndex IS our FUNCTION name (file name)
            */}
      <PostIndex blogPosts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
      
      </Modal>
    </div>

  );
}
