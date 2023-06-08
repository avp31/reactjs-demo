// import { Link } from "react-router-dom";


// const Home = () => {

//     return (
//     <div>
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/nopage">
//                 No page
//               </Link>
//               <Link className="nav-link active" aria-current="page" to="/blog">
//                 Blog
//               </Link>
//             </li>
//     </ul>
//     <h1>Home</h1>
//     </div>
//     )
//   };
  
//   export default Home;
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/nopage">about</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Home;