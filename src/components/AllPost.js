import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditPost";
const AllPost = (props) => {
  return (

    <div className="p-2 my-2 border mx-auto">
      {console.log("post array are ::", props.posts)}
      <h4 className="text-primary text-center">All Posts</h4>
      {props.posts.map((post,key) => (
        <div> {post.editing ? <EditComponent key={post.id} post={post} /> : <Post key={post.id} post={post} />} </div>)
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps)(AllPost);