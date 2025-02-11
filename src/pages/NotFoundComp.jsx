import { Link } from 'react-router-dom';
export default function NotFoundComp() {
    return (
      <>
        <div className="not-found-container">
          <div className="card5">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQblaz4pgu67PdCw8BjLLuU88DSumxTRL8eRw&s'></img>
            <h2>AWWWW...Don't Cry</h2>
            <h5>It's just a 404 error.</h5>
          </div>
          <div className="image2">
          <p>Click below to visit the homepage.</p>
          <Link to="/">
            <button>Homepage</button>
          </Link>
          </div>
          
        </div>
      </>
    );
  }