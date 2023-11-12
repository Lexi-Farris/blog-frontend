export function PostShow(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log({ target: event.target });
    const params = new FormData(event.target);
  //   axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
  //     console.log(response.data);
  //   });
  // };
props.onUpdatePost(props.post.id, params);
event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);

  };

  return (
    <div>
    <h2>{props.post.title}</h2>
    <img src={props.post.image} alt="" />
    <p>{props.post.body}</p>
    <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">

        <div className="form-group"> 
          <input className="form-control"  type="text" defaultValue={props.post.title} name="title" />
        </div>
        <div className="form-group">
  
        </div>

        <div className="form-group" type="text"  ><input className="form-control" type="text"  defaultValue={props.post.body}   name="body" />
        </div>

        <div className="form-group" type="text"  ><input className="form-control" type="text" defaultValue={props.post.image}   name="image" />
        </div>

        </div>
        <button type="submit">Update Post</button>
      </form>
      <button onClick={handleClick} className="btn btn-danger"> Delete Post </button>
    </div>
  )


}

