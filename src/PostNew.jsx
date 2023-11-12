//import axios from "axios";

export function PostNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault(); // overrides the ability to refresh the page and show JSON response from HTTP post request

    const params = new FormData(event.target);

    // axios
    //   .post("http://localhost:3000/posts.json", params)
    //   .then ((response) => {
    //     console.log(response.data);
    //     event.target.reset();
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data.error);
    //   });
    props.onCreatePost(params);
    event.target.reset;

  };

  return (
    <div>
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
          <input className="form-control"  type="text" placeholder="Enter title here" name="title" />
        </div>
        <div className="form-group">
  
        </div>
        
        <div className="form-group" type="text"  ><input className="form-control" type="text"  placeholder="Text"    name="body" />
        </div>

        <div className="form-group" type="text"  ><input className="form-control" type="text"  placeholder="Enter image url here"    name="image" />
        </div>

      
        <button type="submit">Submit Post</button> 

      </form>
    </div>

  );
}
