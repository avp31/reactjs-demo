import React from 'react';

const ColorPalette = (props) => {
  const colors = ['#0000FF','#FF0000', '#382575','#a22626', '#225721', '#c18128'];
//   const [selectedColor, setSelectedColor] = useState('');

//   const handleColorSelection = (color) => {
//     setSelectedColor(color);
//   };

  return (
    <div>
      {colors.map((color, index) => (
        <button
          key={index}
          style={{
            backgroundColor: color,
            width:"30px",
            height:"30px",
            margin:"2px",
            border: color === props.selectedColor ? '1px solid black' : 'none',
          }}
          onClick={() => {
            props.handleColorSelection(color);
            console.log("color",props.selectedColor)
        }}
        ></button>
      ))}
    </div>
  );
};

export default ColorPalette;
