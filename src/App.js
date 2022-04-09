import './App.css';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <PostForm />
        </div>
        <div className="col-md-6">
          <AllPost />
        </div>
      </div>
    </div>
  );
}

export default App;
