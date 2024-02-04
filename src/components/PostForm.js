import { useState } from "react";
import { connect } from "react-redux";
import AllPost from "./AllPost";

const PostForm = (props) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name1 = event.target.name;
    const value = event.target.value;
    console.log("start easy")
    setInputs((values) => (
      console.log('values', {...values, [name1]: value} ),
      { 
        ...values, [name1]: value 
      
      }
      ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: new Date(),
      ...inputs,
      editing: false
    };
    console.log(" the input are:", data);
    props.dispatch({
      type: "ADD_POST",
      data,
    });
    setInputs((event.target.value = ""));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-2 my-2 border mx-auto">
          <h4 className="text-primary text-center">Create Post</h4>
          <form
            className="container was-validated"
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <div className="mb-3 mt-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                style={{
                  backgroundColor: props.themeColor.backgroundColor,
                  color: props.themeColor.color,
                }}
                placeholder="Enter Title"
                name="title"
                value={inputs.title || ""}
                onChange={(event) => {
                  handleChange(event);
                }}
                required
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="message">Post:</label>
              <textarea
                className="form-control"
                rows="5"
                id="message"
                name="message"
                value={inputs.message || ""}
                onChange={(event) => {
                  handleChange(event);
                }}
                style={{
                  backgroundColor: props.themeColor.backgroundColor,
                  color: props.themeColor.color,
                }}
                placeholder="Enter Post"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Post"
              className="btn btn-primary"
              style={{ backgroundColor: props.selectedColor }}
            />
          </form>
        </div>
        <div className="col-md-6">
          <AllPost selectedColor={props.selectedColor}
                themeColor={props.themeColor}/>
        </div>
      </div>
    </div>
  );
};
export default connect()(PostForm);
