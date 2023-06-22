import { useState } from "react";

const Demo = (props) => {
    const [text, setText] = useState('');

  const handleButtonClick = () => {
  //  event.preventDefault();
    if (text.length > 0) {
      let conVal = text.toUpperCase();
      setText(conVal);
      props.showAlert("success", "Uppercase Done")
      console.log("textbox value", text);
    }
    // const uppercaseText = text.toUpperCase();
    // setText(uppercaseText);
    // props.myAlert('Uppercase Done');
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
    <textarea value={text} onChange={handleTextChange} />
    <button onClick={handleButtonClick}>Convert to Uppercase</button>
  </div>
  )
}

export default Demo
