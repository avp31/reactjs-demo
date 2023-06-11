import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditPost";
const AllPost = (props) => {
  return (
    <>
      {props.posts.length > 0 && (
        <>
          <div
            id="#allpost"
            className="p-2 my-2 border mx-auto"
            style={{ height: "320px", overflow: "scroll" }}
          >
            {console.log("post array are ::", props.posts)}
            <h4 className="text-primary text-center">All Posts</h4>
            {props.posts.map((post, key) => (
              <div key={post.id}>
                {" "}
                {post.editing ? (
                  <EditComponent
                    selectedColor={props.selectedColor}
                    themeColor={props.themeColor}
                    key={post.id}
                    post={post}
                  />
                ) : (
                  <Post
                    selectedColor={props.selectedColor}
                    themeColor={props.themeColor}
                    key={post.id}
                    post={post}
                  />
                )}{" "}
              </div>
            ))}
          </div>
          <div>
            <a href="/">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: props.selectedColor }}
              >
                View All Post
              </button>
            </a>
          </div>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(AllPost);
