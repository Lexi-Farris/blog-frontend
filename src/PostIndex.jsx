import { useState } from "react";

// 'props' is ONLY considered 'props' as opposed to 'parameter' when you're exporting for a componet function. PROPs is your only option

export function PostIndex(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h1>All posts</h1>
      Search Posts:{" "}
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        list="posts-titles"
      />
      <datalist id="posts-titles">
        {props.blogPosts.map((blogPost) => (
          // key attribute needed below b/c you NEED an index value to keep track of the itorator
          <option key={blogPost.id}> {blogPost.title} </option>
        ))}
      </datalist>
      {/* props.blogPosts.map((blogPost) similar to .each loop in RUBY where we are defining an itorator, then using the singular version     */}
      <div className="row">
        {props.blogPosts
          .filter((blogPost) => blogPost.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((blogPost) => (
            // The .map works like the .each SO we have access to /'blog_post' below because it's defined in .map

            <div key={blogPost.id} className="mainPosts col-lg-4 col-md-6 col-12 my-3">
              <p>{blogPost.title}</p>
              <img src={blogPost.image} alt="" />
              <p> {blogPost.body}</p>
              <button
                onClick={() => props.onShowPost(blogPost)}
                type="button"
                className="btn btn-outline-info"
                onClickCapture={() => props.onShowPost(blogPost)}
              >
                {" "}
                More Info Here
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
