export function PostShow(props) {
  props.post;
  return (
    <div>
    <h2>{props.post.title}</h2>
    <img src={props.post.image} alt="" />
    <p>{props.post.blogContent}</p>
    </div>
  )


}

