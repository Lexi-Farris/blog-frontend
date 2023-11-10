export function PostNew() {
  return (
    <div>
      <h1>New post</h1>
      <form action="/url" method='GET'>
        <input type="text" name="title" placeholder="Title "></input> <br></br><br></br>
        <textarea id="body" rows="50" cols="56" placeholder="Enter text here"></textarea>
        <br></br><br></br>
        <input type="image" name="image" accept="/image/png, image/jpg, image/svg" src="https://png.pngtree.com/png-vector/20230330/ourmid/pngtree-click-the-red-submit-button-icon-vector-png-image_6674606.png" alt="submit"></input>

      </form>
    </div>

  );
}
