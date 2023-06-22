import "./App.css";
import PostForm from "./components/PostForm";
import Navbar from "./components/Navbar";
import TextForm from "./components/textDemo/TextForm";
import About from "./components/textDemo/About";
import { useState } from "react";
import Alert from "./components/textDemo/Alert";
import ColorPalette from "./components/ColorPallet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoPage from "./components/textDemo/NoPage";
import Demo from "./components/textDemo/Demo";
const App = () => {
  const [mode, setdMode] = useState("light");
  const [alert, setAlert] = useState(null, null);
  const [themeColor, setThemeColor] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [selectedColor, setSelectedColor] = useState("");
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  // const myAlert = (message) => {
  //   alert(message);
  // };

  const showAlert = (type, message) => {
    //console.log(`Received parameters: ${type}, ${message}`);
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handletoggleMode = () => {
    if (mode === "dark") {
      setdMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success","Light Mode Enable");
      setThemeColor({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setdMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "Dark Mode Enable");
      setThemeColor({
        color: "white",
        backgroundColor: "black",
      });
    }
  };

  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          togleMode={handletoggleMode}
          themeColor={themeColor}
          selectedColor={selectedColor}
        />
        <Alert alert={alert}/>
        {/* <Demo showAlert={showAlert} /> */}
    
        <ColorPalette
          handleColorSelection={handleColorSelection}
          selectedColor={selectedColor}
        />
        <Switch>
          {/* <Route
            exact
            path="/"
            component={(props) => (
              <TextForm
                {...props}
                mode={mode}
                showAlert={showAlert}
                themeColor={themeColor}
                selectedColor={selectedColor}
              />
            )}
          /> */}
          <Route
            exact
            path="/"
            render={() => <TextForm
              mode={mode}
              showAlert={showAlert}
              themeColor={themeColor}
              selectedColor={selectedColor}
            />}
          />
          <Route
            path="/about"
            render={() => (
              <About
                selectedColor={selectedColor}
                themeColor={themeColor}
              />
            )}
          />
          <Route
            path="/demo"
            render={() => <Demo showAlert={showAlert}/>}
          />

          <Route
            path="/postform"
            render={(props) => (
              <PostForm
                selectedColor={selectedColor}
                themeColor={themeColor}
              />
            )}
          />
          <Route path="*" render={NoPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
