import { useState } from "react";
import { connect } from "react-redux";

const PostForm = (props) => {

    const [inputs, setInputs] = useState({});
    const [editing, setEditing] = useState("false");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));

    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            id: new Date(),
            ...inputs,
            editing: false

        }
        console.log(" the input are:", data)
        props.dispatch({
            type: 'ADD_POST',
            data
        });
        setInputs(event.target.value = "");
    }

    return (
        <div className="p-2 my-2 border mx-auto">
            <h4 className="text-primary text-center">Create Post</h4>
            <h1></h1>
            <form className="container was-validated" onSubmit={(event) => { handleSubmit(event) }}>
                <div className="mb-3 mt-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Title" name="title"
                        value={inputs.title || ""}
                        onChange={(event) => { handleChange(event) }}
                        required
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="message">Post:</label>
                    <textarea className="form-control" rows="5" id="message" name="message"
                        value={inputs.message || ""} onChange={(event) => { handleChange(event) }} placeholder="Enter Post"
                        required></textarea>
                </div>
                <input type="submit" value="Post" className="btn btn-primary" />
            </form>
        </div>
    )
}
export default connect()(PostForm);