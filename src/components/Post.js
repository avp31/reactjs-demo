import { connect } from "react-redux";

const Post = (props) => {

  const deletePost = (event) => {
    const postId = props.post.id;
    props.dispatch({
      type: "DELETE_POST",
      id: postId
    })
  }

  const editPost = () => {
    const postId = props.post.id;
    props.dispatch({
      type: "EDIT_POST",
      id: postId
    })

  }

  return (
    <div className="mt-3">
      <div className="card mx-auto">
        <div className="card-body" key={props.post.id}   style={{
              backgroundColor: props.themeColor.backgroundColor,
              color: props.themeColor.color,
            }}>
          <h4 className="card-title">{props.post.title}</h4>
          <p className="card-text">{props.post.message}</p>
          <button type="button" className="btn btn-info float-start" onClick={editPost}>Edit</button>
          <button type="button" className="btn btn-danger float-end" onClick={deletePost}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default connect()(Post);