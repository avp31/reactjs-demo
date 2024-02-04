import "./App.css";
import PostForm from "./components/PostForm";
import Navbar from "./components/Navbar";
import TextForm from "./components/textDemo/TextForm";
import About from "./components/textDemo/About";
import { useState } from "react";
import Alert from "./components/textDemo/Alert";
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

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
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
          handleColorSelection={handleColorSelection}
        />
        <Alert alert={alert}/>
        <Switch>
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
            exact
            path="/about"
            render={() => (
              <About
                selectedColor={selectedColor}
                themeColor={themeColor}
              />
            )}
          />
          <Route
            exact
            path="/demo"
            render={() => <Demo showAlert={showAlert}/>}
          />
          <Route
            exact
            path="/postform"
            render={() => (
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
